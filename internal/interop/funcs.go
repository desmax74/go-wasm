package interop

import (
	"fmt"
	"runtime/debug"
	"strings"
	"syscall/js"

	"github.com/johnstarich/go-wasm/log"
	"github.com/pkg/errors"
)

type Func = func(args []js.Value) (interface{}, error)

type CallbackFunc = func(args []js.Value) ([]interface{}, error)

func SetFunc(val js.Value, name string, fn interface{}) js.Func {
	defer handlePanic(0)

	switch fn.(type) {
	case Func, CallbackFunc:
	default:
		panic(fmt.Sprintf("Invalid SetFunc type: %T", fn))
	}

	wrappedFn := func(_ js.Value, args []js.Value) interface{} {
		return setFuncHandler(name, fn, args)
	}
	jsWrappedFn := js.FuncOf(wrappedFn)
	val.Set(name, jsWrappedFn)
	return jsWrappedFn
}

func setFuncHandler(name string, fn interface{}, args []js.Value) (returnedVal interface{}) {
	logArgs := []interface{}{"running op: " + name}
	for _, arg := range args {
		logArgs = append(logArgs, arg)
	}
	log.DebugJSValues(logArgs...)

	switch fn := fn.(type) {
	case Func:
		defer func() {
			log.DebugJSValues("completed sync op: "+name, returnedVal)
			handlePanic(0)
		}()

		ret, err := fn(args)
		if err != nil {
			log.Error(errors.Wrap(err, name).Error())
		}
		return ret
	case CallbackFunc:
		// callback style detected, so pop callback arg and call it with the return values
		// error always goes first
		callback := args[len(args)-1]
		args = args[:len(args)-1]
		go func() {
			var ret []interface{}
			var err error
			defer func() {
				if err != nil {
					log.DebugJSValues("completed op failed: "+name, ret)
				} else {
					log.DebugJSValues("completed op: "+name, ret)
				}
				handlePanic(0)
			}()

			ret, err = fn(args)
			err = WrapAsJSError(err, name)
			ret = append([]interface{}{err}, ret...)
			callback.Invoke(ret...)
		}()
		return nil
	default:
		panic("impossible case") // handled above
	}
}

func handlePanic(skipPanicLines int) interface{} {
	r := recover()
	if r == nil {
		return nil
	}
	stack := string(debug.Stack())
	for iter := 0; iter < skipPanicLines; iter++ {
		ix := strings.IndexRune(stack, '\n')
		if ix == -1 {
			break
		}
		stack = stack[ix+1:]
	}
	switch r := r.(type) {
	case js.Value:
		log.ErrorJSValues(
			"panic:",
			r,
			"\n\n"+stack,
		)
	default:
		log.Errorf("panic: (%T) %+v\n\n%s", r, r, stack)
	}
	// TODO need to find a way to just throw the error instead of crashing
	return r
}

func PanicLogger() {
	r := handlePanic(0)
	if r != nil {
		panic(r)
	}
}

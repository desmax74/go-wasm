package process

import (
	"syscall/js"

	"github.com/johnstarich/go-wasm/internal/fs"
	"github.com/johnstarich/go-wasm/internal/interop"
	"github.com/johnstarich/go-wasm/internal/process"
	"github.com/pkg/errors"
)

func spawn(args []js.Value) (interface{}, error) {
	if len(args) == 0 {
		return nil, errors.Errorf("Invalid number of args, expected command name: %v", args)
	}

	command := args[0].String()
	argv := []string{command}
	if len(args) >= 2 {
		length := args[1].Length()
		for i := 0; i < length; i++ {
			argv = append(argv, args[1].Index(i).String())
		}
	}

	procAttr := &process.ProcAttr{}
	if len(args) >= 3 {
		procAttr = parseProcAttr(args[2])
	}
	return Spawn(command, argv, procAttr)
}

func Spawn(command string, args []string, attr *process.ProcAttr) (process.Process, error) {
	p, err := process.New(command, args, attr)
	if err != nil {
		return nil, err
	}
	return p, p.Start()
}

func parseProcAttr(value js.Value) *process.ProcAttr {
	attr := &process.ProcAttr{}
	if dir := value.Get("cwd"); dir.Truthy() {
		attr.Dir = dir.String()
	}
	if env := value.Get("env"); env.Truthy() {
		attr.Env = make(map[string]string)
		for name, prop := range interop.Entries(env) {
			attr.Env[name] = prop.String()
		}
	}

	if stdio := value.Get("stdio"); stdio.Truthy() {
		length := stdio.Length()
		for i := 0; i < length; i++ {
			file := stdio.Index(i)
			switch file.Type() {
			case js.TypeNumber:
				fd := fs.FID(file.Int())
				attr.Files = append(attr.Files, &fd)
			case js.TypeString:
				switch file.String() {
				case "ignore":
					attr.Files = append(attr.Files, nil)
				case "inherit":
					fd := fs.FID(i)
					attr.Files = append(attr.Files, &fd)
				case "pipe":
					panic("not implemented") // TODO
				}
			}
		}
	}
	return attr
}

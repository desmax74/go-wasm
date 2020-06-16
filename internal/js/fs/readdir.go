package fs

import (
	"syscall/js"

	"github.com/johnstarich/go-wasm/internal/fs"
	"github.com/pkg/errors"
)

func readdir(args []js.Value) ([]interface{}, error) {
	fileNames, err := readdirSync(args)
	return []interface{}{fileNames}, err
}

func readdirSync(args []js.Value) (interface{}, error) {
	if len(args) != 1 {
		return nil, errors.Errorf("Invalid number of args, expected 1: %v", args)
	}
	path := args[0].String()
	dir, err := fs.ReadDir(path)
	if err != nil {
		return nil, err
	}
	var names []interface{}
	for _, f := range dir {
		names = append(names, f.Name())
	}
	return names, err
}

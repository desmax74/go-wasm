package fstest

import (
	"testing"

	"github.com/spf13/afero"
)

type FSTester interface {
	FS() afero.Fs
	Clean()
}

type CleanFunc func() error

type fsTester struct {
	tb      testing.TB // only used for t.Helper()
	name    string
	fs      afero.Fs
	cleanUp CleanFunc
}

func newTester(tb testing.TB, name string, fs afero.Fs, cleanUp CleanFunc) FSTester {
	return fsTester{
		tb:      tb,
		name:    name,
		fs:      fs,
		cleanUp: cleanUp,
	}
}

func (f fsTester) FS() afero.Fs {
	return f.fs
}

func (f fsTester) Clean() {
	f.tb.Helper()
	err := f.cleanUp()
	if err != nil {
		f.tb.Errorf("Failed to clean up %s: %v", f.name, err)
	}
}

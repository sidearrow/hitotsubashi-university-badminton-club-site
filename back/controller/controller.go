package controller

import (
	"fmt"
	"net/http"

	"../model"
)

func BBSIndex(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	data := model.SelectAll()
	fmt.Fprint(w, data)
}

func BBSInsert(w http.ResponseWriter, r *http.Request) {
	model.Insert(r)
}
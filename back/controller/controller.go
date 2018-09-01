package controller

import (
	"fmt"
	"net/http"
	"strconv"

	"../model"
)

func BBSIndex(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	pageNum, err := strconv.Atoi(r.URL.Query().Get("page"))
	if err == nil {
		data := model.SelectAll(pageNum)
		fmt.Fprint(w, data)
	} else {
		w.WriteHeader(http.StatusBadRequest)
	}
}

func BBSInsert(w http.ResponseWriter, r *http.Request) {
	model.Insert(r)
}
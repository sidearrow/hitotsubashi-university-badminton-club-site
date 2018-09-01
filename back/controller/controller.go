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
		data := model.Select(pageNum)
		fmt.Fprint(w, data)
	} else {
		w.WriteHeader(http.StatusBadRequest)
	}
}

func BBSInsert(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	title       := r.FormValue("title")
	contributor := r.FormValue("contributor")
	content     := r.FormValue("content")
	password    := r.FormValue("password")

	isErr := r.Method != "POST" || title == "" || contributor == "" || content == "" || password == ""

	if isErr {
		w.WriteHeader(http.StatusBadRequest)
	} else {
		model.Insert([]string{title, contributor, content, password})
	}
}

func BBSDelete(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id       := r.FormValue("id")
	password := r.FormValue("password")

	isErr := id == "" || password == ""

	if isErr {
		w.WriteHeader(http.StatusBadRequest)
	} else {
		data := model.Delete(id, password)
		w.WriteHeader(w, data)
	}
}
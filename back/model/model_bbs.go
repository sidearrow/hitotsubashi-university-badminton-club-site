package model

import (
	"time"
	"net/http"
	"encoding/json"
)

func SelectAll() (string) {
	db := Connect()

	var bbs []Bbs
	db.Find(&bbs)

	print(db.HasTable("bbs"))

	jsonBytes, _ := json.Marshal(bbs)

	return string(jsonBytes)
}

func Insert(r *http.Request) {
	db := Connect()

	db.Create(&Bbs{
		Title: r.FormValue("title"),
		Contributor: r.FormValue("contributor"),
		Content: r.FormValue("content"),
		Password: r.FormValue("password"),
		IsDelete: false,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	})
}
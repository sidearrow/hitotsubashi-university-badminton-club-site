package main

import (
	"time"
	"model"
)

func main() {
	db := model.Connect()

	//db.CreateTable(&model.Bbs{})
	bbs := model.Bbs{
		Title: "title",
		Contributor: "name",
		Content: "adfafdg",
		Password: "1111",
		IsDelete: false,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	db.Create(&bbs)
}
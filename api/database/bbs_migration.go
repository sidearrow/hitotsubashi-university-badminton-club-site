package main

import (
	"model"
)

func main() {
	db := model.Connect()

	db.CreateTable(&model.Bbs{})
}
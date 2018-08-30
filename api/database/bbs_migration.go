package main

import (
	"model"
)

type Bbs struct {
	Id    int 
	Title string
}

func main() {
	db := model.Connect()

	db.CreateTable(&Bbs{})
}
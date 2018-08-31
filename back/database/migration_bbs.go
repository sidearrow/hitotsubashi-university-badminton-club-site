package main

import (
	"fmt"
	"encoding/json"
	//"time"
	//"model"
	"io/ioutil"
)

func main() {
	seed()
	//db := model.Connect()

	//db.CreateTable(&model.Bbs{})
	/*
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
	*/
}

func seed() {
	type Input struct {
		Title       string `json:"title"`
		Contributor string `json:"name"`
		Content     string `json:"content"`
		Date        string `json:"date"`
		Password    string `json:"password"`
	}

	var input []Input
	file, _ := ioutil.ReadFile("database/data/bbs-data.json")
	err := json.Unmarshal(file, &input)
	fmt.Println(err)

	fmt.Println(input)
}
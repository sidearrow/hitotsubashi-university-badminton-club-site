package main

import (
	"encoding/json"
	"time"
	"model"
	"io/ioutil"
)

func main() {
	seed()
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
	json.Unmarshal(file, &input)

	db := model.Connect()
	for _, v := range input {
		tmpDate, _ := time.Parse("2006/01/02 15:04:05", v.Date)
		db.Create(&model.Bbs{
			Title      : v.Title,
			Contributor: v.Contributor,
			Content    : v.Content,
			Password   : v.Password,
			IsDelete   : false,
			CreatedAt  : tmpDate,
			UpdatedAt  : tmpDate,
		})
	}
}
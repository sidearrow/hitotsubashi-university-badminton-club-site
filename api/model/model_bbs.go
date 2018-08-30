package model

import (
	"encoding/json"
)

type Bbs struct {
	Id    int 
	Title string
}

func SelectAll() (string) {
	db := Connect()

	var bbs []Bbs
	db.Find(&bbs)

	print(db.HasTable("bbs"))

	jsonBytes, _ := json.Marshal(bbs)

	return string(jsonBytes)
}
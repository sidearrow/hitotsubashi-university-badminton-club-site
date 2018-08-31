package model

import (
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
package model

import (
	"encoding/json"
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type Bbs struct {
	Id    string
	Title string
}

func SelectAll() (string) {
	db, err := gorm.Open("postgres", "host=db port=5432 user=postgres password=mysecretpassword dbname=hit_u_bad sslmode=disable")
    fmt.Println(err)

	var bbs []Bbs
	db.Find(&bbs)

	jsonBytes, _ := json.Marshal(bbs)

	return string(jsonBytes)
}
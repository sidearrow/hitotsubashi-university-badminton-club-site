package model

import (
	"fmt"
	"time"
	"net/http"
	"encoding/json"
)

func SelectAll(pageNum int) (string) {
	db := Connect()

	var bbs []Bbs
	//db.Model(&Bbs{}).Where("is_delete = ?", "false").Count(&res.count)
	db.Where("is_delete = ?", "false").Order("updated_at asc").Limit(20).Offset((pageNum-1)*20).Find(&bbs)

	jsonBytes, err := json.Marshal(bbs)
	fmt.Println(err)

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
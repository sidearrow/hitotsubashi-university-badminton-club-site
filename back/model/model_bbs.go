package model

import (
	"time"
	"net/http"
	"encoding/json"
)

func SelectAll(pageNum int) (string) {
	db := Connect()

	type Response struct {
		Count int
		Data  []Bbs
	}
	
	var res Response
	db.Model(&Bbs{}).Where("is_delete = ?", "false").Count(&res.Count)
	db.Where("is_delete = ?", "false").Order("updated_at asc").Limit(20).Offset((pageNum-1)*20).Find(&res.Data)

	jsonBytes, _ := json.Marshal(res)

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
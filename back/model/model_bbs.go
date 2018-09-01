package model

import (
	"time"
	"encoding/json"
)

func Select(pageNum int) (string) {
	db := Connect()

	type Response struct {
		Count int
		Data  []Bbs
	}
	
	var res Response
	db.Model(&Bbs{}).Where("is_delete = ?", "false").Count(&res.Count)
	db.Where("is_delete = ?", "false").Order("updated_at desc").Limit(20).Offset((pageNum-1)*20).Find(&res.Data)

	jsonBytes, _ := json.Marshal(res)

	return string(jsonBytes)
}

func Insert(data []string) {
	db := Connect()

	db.Create(&Bbs{
		Title      : data[0],
		Contributor: data[1],
		Content    : data[2],
		Password   : data[3],
		IsDelete   : false,
		CreatedAt  : time.Now(),
		UpdatedAt  : time.Now(),
	})
}

func Delete(id string, password string) (int) {
	db := Connect()

	res := db.Model(&Bbs{}).Where("id = ? AND password = ?", id, password).Updates(map[string]interface{}{"is_delete": true, "updated_at": time.Now()}).RowsAffected
	jsonBytes, _ := json.Marshal(res)
	
	return string(jsonBytes)
}
package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type Bbs struct {
	Id          int    `gorm:"primary_key"` 
	Title       string
	Contributor string
	Content     string
	Password    string `gorm:"type:varchar(4)"`
	gorm.Model
}

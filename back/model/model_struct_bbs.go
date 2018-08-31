package model

import (
	"time"
)

type Bbs struct {
	Id          int    `gorm:"primary_key"` 
	Title       string
	Contributor string
	Content     string
	Password    string `gorm:"type:varchar(4)"`
	IsDelete    bool
	CreatedAt   time.Time
	UpdatedAt   time.Time
}
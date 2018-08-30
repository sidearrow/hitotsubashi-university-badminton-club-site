package model

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func Connect() *gorm.DB {
	const (
		host = "db"
		port = "5432"
		user = "postgres"
		pass = "mysecretpassword"
		dbname = "hit_u_bad"
	)

	dns := "host="+host+" port="+port+" user="+user+" password="+pass+" dbname="+dbname+" sslmode=disable"

	db, err := gorm.Open("postgres", dns)
	if err != nil {
		fmt.Println(err)	
	}

	db.LogMode(true)

	return db
}
package model

import (
	"os"
	"fmt"

	"github.com/joho/godotenv"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func Connect() *gorm.DB {
	const (
		host = os.Getenv("DB_HOST")//db
		port = os.Getenv("DB_PORT")//"5432"
		user = os.Getenv("DB_USER")//"postgres"
		pass = os.Getenv("DB_PASSWORD") //"mysecretpassword"
		dbname = os.Getenv("DB_DBNAME")//"hit_u_bad"
	)

	dns := "host="+host+" port="+port+" user="+user+" password="+pass+" dbname="+dbname+" sslmode=disable"

	db, err := gorm.Open("postgres", dns)
	if err != nil {
		fmt.Println(err)	
	}

	db.LogMode(true)

	return db
}
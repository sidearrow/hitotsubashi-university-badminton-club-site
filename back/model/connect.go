package model

import (
	"os"
	"fmt"

	"github.com/joho/godotenv"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func Connect() *gorm.DB {
	godotenv.Load()

	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	pass := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	dns := "host="+host+" port="+port+" user="+user+" password="+pass+" dbname="+dbname+" sslmode=disable"

	db, err := gorm.Open("postgres", dns)
	if err != nil {
		fmt.Println(err)	
	}

	return db
}
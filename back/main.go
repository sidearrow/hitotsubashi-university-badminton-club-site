package main

import (
	"net/http"

	"./controller"
)

func main() {
	http.HandleFunc("/bbs/select/:page", controller.BBSIndex)
	http.HandleFunc("/bbs/insert", controller.BBSInsert)

	http.ListenAndServe(":8080", nil)
}
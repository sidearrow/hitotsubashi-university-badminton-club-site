package main

import (
	"net/http"

	"./controller"
)

func main() {
	http.HandleFunc("/bbs/select", controller.BBSIndex)
	http.HandleFunc("/bbs/insert", controller.BBSInsert)
	http.HandleFunc("/bbs/delete", controller.BBSDelete)

	http.ListenAndServe(":8080", nil)
}
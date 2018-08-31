package main

import (
	"net/http"

	"./controller"
)

func main() {
	http.HandleFunc("/", controller.BBSIndex)

	http.ListenAndServe(":8080", nil)
}
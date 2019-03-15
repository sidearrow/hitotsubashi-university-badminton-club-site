package main

import (
	"net/http"
	"regexp"
	"strings"
	"unicode/utf8"

	"github.com/gin-gonic/gin"
)

func bbsCreateHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "bbs_create.go.html", nil)
}

func bbsCreateConfirmHandler(c *gin.Context) {
	formTitle := strings.TrimSpace(c.PostForm("title"))
	formAuthor := strings.TrimSpace(c.PostForm("author"))
	formContent := strings.TrimSpace(c.PostForm("content"))
	formPassword := strings.TrimSpace(c.PostForm("password"))

	if formTitle == "" || utf8.RuneCountInString(formTitle) > 50 {
	}
	if formAuthor == "" || utf8.RuneCountInString(formAuthor) > 50 {
	}
	if formContent == "" || utf8.RuneCountInString(formAuthor) > 2000 {
	}
	if regexp.MustCompile(`%d%d%d%d`).MatchString(formPassword) {
	}

	c.HTML(http.StatusOK, "bbs_create-confirm.go.html", nil)
}

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.go.html", nil)
	})
	r.GET("/bbs/create", bbsCreateHandler)
	r.POST("/bbs/create-confirm", bbsCreateConfirmHandler)
	r.Run()
}

# API

## 掲示板

`/api`

| path      | method | param      | memo |
|-----------|--------|------------|--|
| posts/:id | GET    | [password] |  |
| posts/:id | PUT    | password   |  |
| posts/:id | DELETE | password   |  |
| posts/pages | GET | [id] |  |


### `posts/:id` - `GET`
```json
{
    "auth": true,
    "data": {
        "author": "author",
        "title": "title",
        "content": "content",
        "createdAt": "",
        "updatedAt": ""
    }
}
```

## みずとり
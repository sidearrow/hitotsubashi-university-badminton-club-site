## API 仕様

### ログイン

- method: POST
- path: /login
- query
    - password: パスワード

- 認証成功
  - code: 200
  - body: `{"token": "<jwt>"}`
- 認証失敗
  - code: 401
  - body: `{}`

### 認証チェック

- method: GET
- path: /check
- query
    - token: jwt

- 認証成功
  - code: 200
  - body: `{}`
- 認証失敗
  - code: 401
  - body: `{}`

### 署名付き URL 取得

- method: GET
- path: /signed-url
- query
    - token: jwt

- 取得成功
  - code: 200
  - body: `{"signedUrl": "<URL>"}`
- 取得失敗（ファイルなし）
  - code: 404
  - body: `{}`
- 認証失敗
  - code: 401
  - body: `{}`
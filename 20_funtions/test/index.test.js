const app = require('../app/app')
const request = require('supertest')

describe('BBS', () => {
  it('GET /bbs/posts', async () => {
    const res = await request(app).get('/bbs/posts')
    expect(res.statusCode).toBe(200)
    expect(res.body[0]).toHaveProperty('id')
  })
})
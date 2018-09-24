const test = require('firebase-functions-test')()
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const assert = chai.assert
const expect = chai.expect

const app = require('../app/controller').app

const testData = require('./testdata/bbs-post')

process.env.ENV = 'TEST'

describe('API testing', function () {
  this.timeout(10000)

  let id;

  it('投稿', function (done) {
    chai
      .request(app)
      .post('/bbs/post')
      .set('content-type', 'application/json')
      .send(JSON.stringify(testData.case1))
      .end(function (err, res) {
        expect(res).to.be.json
        expect(res.body).to.have.property('id')

        id = res.body.id
        done()
      })
  })

  it('投稿確認', function (done) {
    chai
      .request(app)
      .get('/bbs/posts')
      .end(function (err, res) {
        assert(res.body[0].id, id)

        done()
      })
  })

  it('投稿修正', function (done) {
    chai
      .request(app)
      .put(`/bbs/post/${id}`)
      .set('content-type', 'application/json')
      .send(JSON.stringify(testData.case2))
      .end(function (err, res) {
        expect(res).to.be.json
        console.log(res.body)
        //expect(res.body).to.have.property('id')

        done()
      })
  })

  it('投稿修正確認', function (done) {
    chai
      .request(app)
      .get(`/bbs/post/${id}`)
      .end(function (err, res) {
        console.log(res.body)
        expect(res.body.title).to.equal(testData.case2.title)
        expect(res.body.createdAt).to.not.equal(res.body.updatedAt)

        done()
      })
  })

  it('投稿削除', function (done) {
    chai
      .request(app)
      .delete(`/bbs/post/${id}`)
      .send({password: testData.case2.password})
      .end(function (err, res) {
        console.log(res.body)

        done()
      })
  })
})
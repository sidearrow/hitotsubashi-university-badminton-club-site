const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const assert = chai.assert
//const expect = chai.expect

const app = require('../app/app')
const database = require('../app/services').database
const testData = require('./testdata/bbs-post')


describe('BBS API Test', function () {
  this.timeout(10000)

  let id
  let testDataId = []

  before(async () => {
    const insert = async (data) => {
      const tmp = await database.collection('bbs').add(data)
      return tmp.id
    }
    testDataId.push(await insert(testData.narrowDate1))
    testDataId.push(await insert(testData.narrowDate2))
    testDataId.push(await insert(testData.narrowDate3))
  })

  it('post', function (done) {
    chai
      .request(app)
      .post('/bbs/posts')
      .set('content-type', 'application/json')
      .send(JSON.stringify(testData.case1))
      .end(function (_, res) {
        assert.property(res.body, 'id')
        assert.equal(res.body.isSuccess, true)

        id = res.body.id
        done()
      })
  })
/*
  it('get posts', function (done) {
    chai
      .request(app)
      .get('/dev/bbs/posts')
      .end(function (_, res) {
        assert.equal(res.body[0].id, id)
        assert.hasAllKeys(
          res.body[0],
          [
            'id',
            'title',
            'author',
            'content',
            'createdAt',
            'updatedAt',
            'createdAtRaw',
            'updatedAtRaw',
            'commentNum',
          ]
        )

        done()
      })
  })

  it('get post', function (done) {
    chai
      .request(app)
      .get(`/dev/bbs/post/${id}`)
      .end(function (_, res) {
        assert.equal(res.body.auth, false)
        assert.hasAllKeys(
          res.body,
          [
            'auth',
            'id',
            'title',
            'author',
            'content',
            'createdAt',
            'updatedAt',
            'createdAtRaw',
            'updatedAtRaw',
            'comments',
          ]
        )

        done()
      })
  })

  it('get post (input correct password)', function (done) {
    chai
      .request(app)
      .get(`/dev/bbs/post/${id}`)
      .query({ password: '1111' })
      .end(function (_, res) {
        assert.equal(res.body.auth, true)

        done()
      })
  })

  it('put post', function (done) {
    chai
      .request(app)
      .put(`/dev/bbs/post/${id}`)
      .set('content-type', 'application/json')
      .send(JSON.stringify(testData.case2))
      .end(function (_, res) {
        assert.equal(res.body.isSuccess, true)

        done()
      })
  })

  it('confirm put post', function (done) {
    chai
      .request(app)
      .get(`/dev/bbs/post/${id}`)
      .end(function (_, res) {
        assert.equal(res.body.title, testData.case2.title)
        assert.notEqual(res.body.createdAtRaw, res.body.updatedAtRaw)

        done()
      })
  })

  it('post comment', function (done) {
    chai
      .request(app)
      .post(`/dev/bbs/post/${id}/comment`)
      .set('content-type', 'application/json')
      .send(JSON.stringify(testData.caseComment1))
      .end(function (_, res) {
        assert.equal(res.body.isSuccess, true)

        done()
      })
  })

  it('confirm post comment', function (done) {
    chai
      .request(app)
      .get(`/dev/bbs/post/${id}`)
      .end(function (_, res) {
        assert.equal(res.body.comments[0].author, testData.caseComment1.author)
        assert.hasAllDeepKeys(
          res.body.comments[0],
          [
            'author',
            'content',
            'password',
            'isDelete',
            'createdAt',
            'createdAtRaw'
          ]
        )

        done()
      })
  })

  it('delete comment (fail)', function (done) {
    chai
      .request(app)
      .delete(`/dev/bbs/post/${id}/comment/0`)
      .query({password: '9999'})
      .end(function (_, res) {
        assert.equal(res.body.isSuccess, false)

        done()
      })
  })

  it('delete comment (success)', function (done) {
    chai
      .request(app)
      .delete(`/dev/bbs/post/${id}/comment/0`)
      .query({password: testData.caseComment1.password})
      .end(function (_, res) {
        assert.equal(res.body.isSuccess, true)

        done()
      })
  })

  it('confirm delete comment', function (done) {
    chai
      .request(app)
      .get(`/dev/bbs/post/${id}`)
      .end(function (_, res) {
        assert.equal(res.body.comments[0].isDelete, true)

        done()
      })
  })

  it('get posts by id', function (done) {
    chai
      .request(app)
      .post('/dev/bbs/post')
      .set('content-type', 'application/json')
      .send(JSON.stringify(testData.case1))
      .end(function (_, res) {
        assert.property(res.body, 'id')
        assert.equal(res.body.isSuccess, true)

        const nextId = res.body.id

        chai
          .request(app)
          .get(`/dev/bbs/posts/${nextId}`)
          .end(function (_, res) {
            assert.equal(res.body[0].id, id)

            done()
          })
      })
  })

  it('delet post (miss)', function (done) {
    chai
      .request(app)
      .delete(`/dev/bbs/post/${id}`)
      .query({password: '9999'})
      .end(function (_, res) {
        assert.equal(res.body.isSuccess, false)

        done()
      })
  })

  it('delete post (success)', function (done) {
    chai
      .request(app)
      .delete(`/dev/bbs/post/${id}`)
      .query({password: testData.case1.password})
      .end(function (_, res) {
        assert.equal(res.body.isSuccess, true)

        done()
      })
  })

  it('narrow date', (done) => {
    chai
      .request(app)
      .get('/dev/bbs/posts/date/200011')
      .end(function (_, res) {
        assert.equal(res.body.length, 1)
        assert.equal(res.body[0].title, testData.narrowDate1.title)
      })
    chai
      .request(app)
      .get('/dev/bbs/posts/date/200012')
      .end((_, res) => {
        assert.equal(res.body.length, 1)
        assert.equal(res.body[0].title, testData.narrowDate2.title)
      })
    chai
      .request(app)
      .get('/dev/bbs/posts/date/hoge')
      .end((_, res) => {
        assert.hasAllKeys(res.body, ['err'])
        done()
      })
  })

  after(() => {
    testDataId.forEach((v) => {
      database
        .collection('dev-bbs')
        .doc(v)
        .delete()
    })
  })
})

describe('Mizutori API test', function () {
  this.timeout(10000)

  it('get obmsg', function (done) {
    chai
      .request(app)
      .get('/dev/mizutori/obmsg')
      .end(function (_, res) {
        assert.equal(res.body[0].year, '2018')

        done()
      })
  })*/
})
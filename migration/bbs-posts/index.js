const firebase = require('firebase-admin')
const serviceAccount = require('../service-account-key/service-account-key-dev.json')
/** @type {Array} */
const bbsPostsData = require('./bbs-posts.json')

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
})

const firestore = firebase.firestore()

const insertBBSPostsData = bbsPostsData.map(post => {
  post.createdAt = new Date(post.createdAt)
  post.updatedAt = new Date(post.updatedAt)
  return post
})

insertBBSPostsData.some((post, i) => {
  firestore.collection('bbs-posts').add(post);
})

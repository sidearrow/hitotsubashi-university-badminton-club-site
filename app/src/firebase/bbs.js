import db from './init/firestore'
import auth from './init/auth'

export class Post {
  constructor(author, title, content, password, parentId = null) {
    this.author = author
    this.title = title
    this.content = content
    this.password = password
    this.parentId = parentId
  }

  getDoc() {
    const now = new Date()

    return {
      author: this.author,
      title: this.title,
      content: this.content,
      parentId: this.parentId,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
    }
  }
}

/**
 * @param {Post} post 
 */
export const create = async (post) => {
  const id = (await db.collection('bbs-posts').add(post.getDoc())).id
  await auth.createUserWithEmailAndPassword(id + '@dummy.co.jp', post.password)
}

export const postDelete = async (id) => {
  db.collection('bbs-posts').doc(id).update({
    deletedAt: new Date(),
  })
}

export const get = async (id) => {
  const post = (await db.collection('bbs-posts').doc(id).get()).data()
  const comments = (await db.collection('bbs-posts').where('parentId', '==', id).get()).docs.map(doc => doc.data())

  return {
    post: post,
    comments: comments,
  }
}

export const getList = async () => {
  let query = db.collection('bbs-posts')
  query = query.where('parentId', '==', null).where('deletedAt', '==', null)
  return (await query.get()).docs.map(doc => doc.data())
}

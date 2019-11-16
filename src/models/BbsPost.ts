import firestore from '../services/firestore';
import { dateToString } from '../utils';

class BbsPost {
  public readonly id: string;
  public readonly title: string;
  public readonly author: string;
  public readonly content: string;
  public readonly createdAt: string;

  private constructor(id: string, data: firebase.firestore.DocumentData) {
    this.id = id;
    this.title = data.title;
    this.author = data.author;
    this.content = data.content;
    this.createdAt = dateToString(data.createdAt.toDate());
  }

  public static async get(orderDir: 'asc' | 'desc' = 'desc'): Promise<BbsPost[]> {
    const qs = await firestore
      .collection('bbs-posts')
      .limit(10)
      .orderBy('createdAt', orderDir)
      .get();

    const bbsPosts = qs.docs.map(qds => {
      return new BbsPost(qds.id, qds.data());
    });

    return bbsPosts;
  }
}

export default BbsPost;

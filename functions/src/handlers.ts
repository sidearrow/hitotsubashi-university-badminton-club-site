import { Request, Response } from "express";
import { firestore } from "./services";
import { QuerySnapshot } from "@google-cloud/firestore";

export const bbsIndexHadler = async (req: Request, res: Response) => {
  const dir: 'asc' | 'desc' = req.query.dir === 'asc' ? 'asc' : 'desc';
  const lastId: string | null = req.query.lastId === undefined || req.query.lastId === '' ? null : req.query.lastId;

  let qs: QuerySnapshot;
  if (lastId !== null) {
    const startAfterQds = await firestore.collection('bbs-posts').doc(lastId).get();
    qs = await firestore.collection('bbs-posts').orderBy('createdAt', dir).startAfter(startAfterQds).limit(10).get();
  } else {
    qs = await firestore.collection('bbs-posts').orderBy('createdAt', dir).limit(10).get();
  }

  const data = qs.docs.map((qds) => {
    return [
      qds.id,
      qds.data(),
    ];
  });

  res.json(data);
}

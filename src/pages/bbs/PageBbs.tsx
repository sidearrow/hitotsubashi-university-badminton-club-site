import React, { useEffect, useState } from 'react';
import BbsPost from '../../models/BbsPost';

const BbsPosts: React.FC = () => {
  const [bbsPosts, setBbsPosts] = useState<BbsPost[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await BbsPost.get();
      setBbsPosts(res);
    })();
  }, []);

  const bbsPostCard = (bbsPost: BbsPost) => {
    return (
      <div className="card border-dark">
        <div className="card-body">
          <span>{bbsPost.title}</span>
          <div>
            <div>
              <span>{bbsPost.author}</span>
              <span className="ml-4 text-monospace text-secondary">{bbsPost.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (bbsPosts === null) {
    return <div>no data</div>;
  }
  return (
    <>{
      bbsPosts.map((bbsPost, i) => {
        return <div className="mb-2" key={i}>{bbsPostCard(bbsPost)}</div>;
      })
    }</>
  );
};

const PageBbs: React.FC = () => {
  return (
    <div>
      <h1 className="title-main">掲示板</h1>
      <p>試合の結果などをお知らせします。</p>
      <section className="mb-3">
        <div className="alert alert-primary">
          <p>掲示板はこちらのリンクからご確認ください。</p>
          <a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank" rel="noopener noreferrer">新掲示板</a>
          <br />
          <a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank" rel="noopener noreferrer">旧掲示板</a>
        </div>
      </section>
      <BbsPosts />
    </div>
  )
};

export default PageBbs;

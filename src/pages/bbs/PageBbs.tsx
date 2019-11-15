import React from 'react';

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
    </div>
  )
};

export default PageBbs;

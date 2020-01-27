import React, { useEffect } from 'react';

const script = document.createElement('script');
script.src = 'https://platform.twitter.com/widgets.js';
script.async = true;
script.charset = 'utf-8';

const TwitterTimeline: React.FC = () => {
  useEffect(() => {
    const el = document.getElementById('twitterTimelineScript');
    el !== null && el.replaceWith(script);
  });

  return (
    <div className="card border-dark">
      <div className="card-body">
        <div className="h2 text-center mb-3">Twitter</div>
        <a className="twitter-timeline" data-height="600" data-theme="light" data-chrome="noheader" href="https://twitter.com/hit_u_bad?ref_src=twsrc%5Etfw"></a>
        <span id="twitterTimelineScript"></span>
      </div>
    </div>
  );
}

export default TwitterTimeline;

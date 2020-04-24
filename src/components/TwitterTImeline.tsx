import React, { useEffect } from 'react';


const TwitterTimeline: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';

    const el = document.getElementById('twitterTimelineScript');
    el !== null && el.replaceWith(script);
  });

  return (
    <div style={{ maxWidth: '360px', marginLeft: 'auto', marginRight: 'auto' }}>
      <a className="twitter-timeline" data-height="600" data-theme="light" data-chrome="noheader" href="https://twitter.com/hit_u_bad?ref_src=twsrc%5Etfw"></a>
      <span id="twitterTimelineScript"></span>
    </div>
  );
}

export default TwitterTimeline;

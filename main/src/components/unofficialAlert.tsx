import React from 'react'

const oldHomePageUrl: string = 'http://jfn.josuikai.net/circle/sports/badminton/index.html'

const UnofficialAlert: React.FC = () => (
  <div className="notification has-background-info">
    <div className="container">
      <div className="is-size-7">こちらは非公式版です。<br />最新の情報は <a target="_blank" href={oldHomePageUrl}>こちら</a> からご確認下さい。</div>
    </div>
  </div>
);

export default UnofficialAlert;

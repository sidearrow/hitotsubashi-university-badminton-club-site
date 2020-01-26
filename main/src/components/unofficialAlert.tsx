import React from 'react'

const oldHomePageUrl: string = 'http://jfn.josuikai.net/circle/sports/badminton/index.html'

const UnofficialAlert: React.FC = () => (
  <div className="alert-main py-3">
    <div className="container-fluid main-container">
      <div>こちらは非公式版です。<br />最新の情報は <a target="_blank" href={oldHomePageUrl}>こちら</a> からご確認下さい。</div>
    </div>
  </div>
);

export default UnofficialAlert;

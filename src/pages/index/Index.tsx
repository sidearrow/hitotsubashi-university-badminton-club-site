import React from 'react';

export default () => {
  return (
    <div>
      <div className="alert alert-main">
        <div>こちらは非公式版です。<br />最新の情報は <a target="_blank" rel="noopener noreferrer" href="http://jfn.josuikai.net/circle/sports/badminton/index.html">こちら</a> からご確認下さい。</div>
      </div>
      <div className="jumbotron text-center bg-white px-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img className="w-100" src="/images/logo.svg" alt="icon" />
          </div>
        </div>
        <h1 className="heading">一橋大学<br />バドミントン部</h1>
        <span className="font-italic">Hitotsubashi University Badminton Club was established in 1952.</span>
      </div>
    </div>
  );
}

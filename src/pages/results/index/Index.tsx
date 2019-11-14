import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="form-row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header alert-main">関東学生バドミントン連盟リーグ</div>
          <div className="card-body">
            <div>関東学生バドミントン連盟主催のリーグ戦の結果です。一年に春と秋の２度行なわれます。</div>
            <div className="text-center mt-3">
                <Link to="/result/league">結果を見る</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-md-0 mt-3">
        <div className="card">
          <div className="card-header alert-main">東商戦</div>
          <div className="card-body text-center py-5">準備中</div>
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <div className="card">
          <div className="card-header alert-main">三商戦</div>
          <div className="card-body text-center py-5">準備中</div>
        </div>
      </div>
    </div>
  );
}

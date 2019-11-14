import React from 'react';
import Members from './Members';

export default () => {
  return (
    <div>
      <h1 className="title-main">部員情報</h1>
      <section>
        <nav>
          <div className="nav nav-tabs">a</div>
        </nav>
        <div className="tab-content">
          <div className="tab-pane">
            <div className="form-row my-3">
              <div className="col-sm-6 py-2">
                <div className="card border-dark">
                  <div className="card-body">
                    <div
                      className="h5 pb-1 text-info text-danger"
                    >{'member.fullName'}</div>
                    <div className="pb-1">
                      <span
                        className="border border-dark px-1 mb-1 mr-2 d-inline-block"
                      >{'member.faculty'}</span>
                      <span className="border border-dark px-1 d-inline-block">{'member.highschool'}</span>
                    </div>
                    <div className="pb-1" v-if="member.positions.length > 0">
                      <span
                        className="border border-dark px-1 mr-1 mb-1 d-inline-block"
                      >{'pos'}</span>
                    </div>
                    <div className="pb-1">{'member.comment'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  );
}

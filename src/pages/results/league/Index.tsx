import React from 'react';
import LeagueResult from '../../../models/LeagueResult/LeagueResult';

const leagueResultData = LeagueResult.getData();

export default () => {
  return (
    <div>
      <h1 className="title-main">関東学生バドミントン連盟リーグ</h1>
      <div className="row justify-content-center">
        <div className="table-responsive col-md-9">
          <table className="table table-bordered">
            <thead className="bg-light">
              <tr>
                <th className="font-weight-normal" colSpan={2}>期</th>
                <th className="font-weight-normal">男子</th>
                <th className="font-weight-normal">女子</th>
              </tr>
            </thead>
            <tbody>
              {
                leagueResultData.map(() => {
                  return ( <div>aaa</div> );
                })
              }
              <tr>
                <th className="font-weight-normal bg-light align-middle">a</th>
                <th className="font-weight-normal bg-light">season</th>
                <td>
                  <span className="text-nowrap">
                    <span className="mr-2">season</span>
                    <span></span>
                  </span>
                </td>
                <td>
                  <span className="text-nowrap">
                    <span className="mr-2">season.f</span>
                    <span></span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

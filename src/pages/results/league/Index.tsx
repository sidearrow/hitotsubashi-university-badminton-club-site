import React from 'react';
import LeagueResult from '../../../models/LeagueResult/LeagueResult';

const leagueResultData = LeagueResult.getData();

const CmpUp: React.FC = () => {
  return (
    <span>昇格</span>
  );
};

const CmpDown: React.FC = () => {
  return (
    <span>降格</span>
  );
};


type props = {
  leagueResultRecord: LeagueResult
};
const CmpTr: React.FC<props> = props => {

  return (
    <tr>
      <th className="font-weight-normal bg-light align-middle">{props.leagueResultRecord.getYear()}</th>
      <th className="font-weight-normal bg-light">{props.leagueResultRecord.getSeason()}</th>
      <td>
        <span className="text-nowrap">
          <span className="mr-2">{props.leagueResultRecord.getMResult()}</span>
          {props.leagueResultRecord.getIsMUp() && <CmpUp />}
          {props.leagueResultRecord.getIsMDown() && <CmpDown />}
        </span>
      </td>
      <td>
        <span className="text-nowrap">
          <span className="mr-2">{props.leagueResultRecord.getFResult()}</span>
          {props.leagueResultRecord.getIsFUp() && <CmpUp />}
          {props.leagueResultRecord.getIsFDown() && <CmpDown />}
        </span>
      </td>
    </tr>
  )
};

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
                leagueResultData.map((leagueResultRecord) => {
                  return (<CmpTr leagueResultRecord={leagueResultRecord} />);
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

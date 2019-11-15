import React, { useState, useCallback } from 'react';
import Members from './Members';

type PropsCmpMemberCard = {
  member: any
};
const CmpMemberCard: React.FC<PropsCmpMemberCard> = (props) => {
  return (
    <div className="card border-dark">
      <div className="card-body">
        <div className="h5 pb-1 text-info text-danger">{props.member.name}</div>
        <div className="pb-1">
          <span className="border border-dark px-1 mb-1 mr-2 d-inline-block">{props.member.faculty}</span>
          <span className="border border-dark px-1 d-inline-block">{props.member.highschool}</span>
        </div>
        {props.member.positions.length > 0 && props.member.positions.map((pos: string, i: number) => {
            return (
              <div className="pb-1" key={i}>
                <span className="border border-dark px-1 mr-1 mb-1 d-inline-block">{pos}</span>
              </div>
            )
          })}
        <div className="pb-1">{props.member.comment}</div>
      </div>
    </div>
  );
};

const Member: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const clickTab = useCallback((index: number) => () => {
    setActiveTabIndex(index);
  }, []);

  return (
    <div>
      <h1 className="title-main">部員情報</h1>
      <section>
        <ul className="nav nav-tabs">
          {Members.members.map((membersGrade, i) => {
            return (
              <li className="nav-item" key={i} onClick={clickTab(i)}>
                <a className={'nav-link' + (i === activeTabIndex ? ' active' : '')} href="#tab">{membersGrade.grade}年生</a>
              </li>
            );
          })}
        </ul>
        <div className="tab-content">
          {Members.members.map((membersGrade, i) => {
            return (
              <div className={'tab-pane' + (i === activeTabIndex ? ' show active' : '')} key={i}>
                <div className="form-row my-3">
                  {membersGrade.members.map((member, i) => {
                    return (
                      <div className="col-sm-6 py-2" key={i}>
                        <CmpMemberCard member={member} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section >
    </div>
  );
}

export default Member;

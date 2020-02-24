import React, { useState, useCallback, useContext } from 'react'

import Layout from "../components/layout"
import members from '../files/member.json'
import pageMetadata from '../pageMetaData';
import { AuthContext } from '../AuthProvider';

type Member = {
  gender: number;
  name: string;
  faculty: string;
  highschool: string;
  comment: string;
  positions: string[];
};

const Component: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleClickTab = useCallback((i) => {
    setActiveTabIndex(() => i)
  }, []);

  const cmpMember = (member: Member) => (
    <div className="content">
      <div className={`title is-5 ${member.gender === 0 ? 'text-info' : 'text-danger'}`}>{member.name}</div>
      <div className="tags are-medium">
        <span className="tag is-light">{member.faculty}</span>
        <span className="tag is-light">{member.highschool}</span>
        {member.positions.map((pos, i) => (
          <span className="tag is-light" key={i}>{pos}</span>
        ))}
      </div>
      <div className="pb-1">{member.comment}</div>
    </div>
  );

  return (
    <Layout pageMetadata={pageMetadata.infoMember}>
      <div className="section">
        <h1>部員紹介</h1>
        <div className="content">
          {members.map((v, i) => (
            <div className="col-3" key={i}>
              <a className={`btn btn-block btn-outline-main ${i === activeTabIndex ? 'active' : ''}`} onClick={e => handleClickTab(i)}>{v.grade} 年生
            </a>
            </div>
          ))}
        </div>
        <div className="content">
          {members.map((v, i) => (
            <div className="columns is-multiline" key={i} style={{ display: i === activeTabIndex ? '' : 'none' }}>
              {v.members.map((member, i) => (
                <div className="column is-half is-narrow" key={i} style={{ marginBottom: 30 }}>
                  {cmpMember({
                    gender: member.gender,
                    name: member.fullName,
                    highschool: member.highschool,
                    faculty: member.faculty,
                    comment: member.comment,
                    positions: member.positions,
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>)
}

export default Component

import React, { useState, useCallback } from 'react'

import Layout from "../components/layout"
import members from '../files/member.json'
import pageMetadata from '../pageMetaData';

const Component: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleClickTab = useCallback((i) => {
    setActiveTabIndex(() => i)
  }, []);

  return (
    <Layout pageMetadata={pageMetadata.infoMember}>
      <div className="form-row">
        {members.map((v, i) => (
          <div className="col-3" key={i}>
            <button className={`btn btn-block btn-outline-main ${i === activeTabIndex ? 'active' : ''}`} onClick={e => handleClickTab(i)}>
              <a>{v.grade} 年生</a>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {members.map((v, i) => (
          <div className="row" key={i} style={{ display: i === activeTabIndex ? '' : 'none' }}>
            {v.members.map((member, i) => (
              <div className="col-md-6" key={i} style={{ marginBottom: 30 }}>
                <div className={`h4 pb-1 ${member.gender === 0 ? 'text-info' : 'text-danger'}`}>{member.fullName}</div>
                <div className="mb-2">
                  <span className="px-2 border border-dark d-inline-block mr-2 mt-2">{member.faculty}</span>
                  <span className="px-2 border border-dark d-inline-block mr-2 mt-2">{member.highschool}</span>
                  {member.positions.map((pos, i) => (
                    <span className="px-2 border border-dark d-inline-block mr-2 mt-2" key={i}>{pos}</span>
                  ))}
                </div>
                <div className="pb-1">{member.comment}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>)
}

export default Component

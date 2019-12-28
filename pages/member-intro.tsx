import React, { useState, useCallback } from 'react'

import Layout from "../components/layout"
import members from '../files/member.json'

const Component: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleClickTab = useCallback((i) => {
    setActiveTabIndex(() => i)
  }, []);

  return (<Layout>
    <h1 className="hub-h1">部員情報</h1>
    <section>
      <ul className="nav nav-tabs nav-fill">
        {members.map((v, i) => (
          <li className="nav-item" onClick={e => handleClickTab(i)}>
            <span className={`nav-item nav-link ${i === activeTabIndex ? 'active' : ''}`}>{v.grade}年生</span>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {members.map((v, i) => (
          <div className={`tab-pane fade show ${i === activeTabIndex ? 'active' : ''}`}>
            <div className="form-row my-3">
              {v.members.map(member => (
                <div className="col-sm-6 py-2">
                  <div className="card border-dark h-100">
                    <div className="card-body">
                      <div className={`h5 pb-1 ${member.gender === 0 ? 'text-info' : 'text-danger'}`}>{member.fullName}</div>
                      <div className="pb-1">
                        <span className="border border-dark px-1 mb-1 mr-2 d-inline-block">{member.faculty}</span>
                        <span className="border border-dark px-1 d-inline-block">{member.highschool}</span>
                      </div>
                      <div className="pb-1">
                        {member.positions.map(pos => (
                          <span className="border border-dark px-1 mr-1 mb-1 d-inline-block">{pos}</span>
                        ))}
                      </div>
                      <div className="pb-1">{member.comment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>)
}

export default Component

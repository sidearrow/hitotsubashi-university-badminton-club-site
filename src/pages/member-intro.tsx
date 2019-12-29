import React, { useState, useCallback } from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import members from '../files/member.json'

const Component: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleClickTab = useCallback((i) => {
    setActiveTabIndex(() => i)
  }, []);

  return (<Layout>
    <h1 className="hub-h1">部員情報</h1>
    <section className="section">
      <div className="tabs is-centered">
        <ul>
          {members.map((v, i) => (
            <li className={i === activeTabIndex ? 'is-active' : ''} onClick={e => handleClickTab(i)}>
              <a>{v.grade}年生</a>
            </li>
          ))}
        </ul>
      </div>
      {members.map((v, i) => (
        <div style={{ display: i === activeTabIndex ? '' : 'none' }}>
          {v.members.map(member => (
            <div style={{ marginBottom: 30 }}>
              <div className={`hub-h2 pb-1 ${member.gender === 0 ? 'has-text-info' : 'has-text-danger'}`}>{member.fullName}</div>
              <div className="tags">
                <span className="tag is-info is-light">{member.faculty}</span>
                <span className="tag is-info is-light">{member.highschool}</span>
                {member.positions.map(pos => (
                  <span className="tag is-info is-light">{pos}</span>
                ))}
              </div>
              <div className="pb-1">{member.comment}</div>
            </div>
          ))}
        </div>
      ))}
    </section>
  </Layout>)
}

export default Component

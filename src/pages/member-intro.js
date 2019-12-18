import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import members from '../files/member.json'

class MemberIntroPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTabIndex: 0 }
  }

  clickTab = (index) => {
    this.setState(state => ({
      activeTabIndex: index
    }))
  }

  render = () => (<Layout>
    <h1 class="hub-h1">部員情報</h1>
    <section>
      <ul class="nav nav-tabs nav-fill">
        {members.map((v, i) => (
          <li class="nav-item" onClick={e => this.clickTab(i, e)}>
            <span className={`nav-item nav-link ${i === this.state.activeTabIndex ? 'active' : ''}`}>{v.grade}年生</span>
          </li>
        ))}
      </ul>
      <div class="tab-content">
        {members.map((v, i) => (
          <div className={`tab-pane fade show ${i === this.state.activeTabIndex ? 'active' : ''}`}>
            <div class="form-row my-3">
              {v.members.map(member => (
                <div class="col-sm-6 py-2">
                  <div class="card border-dark h-100">
                    <div class="card-body">
                      <div className={`h5 pb-1 ${member.gender === 0 ? 'text-info' : 'text-danger'}`}>{member.fullName}</div>
                      <div class="pb-1">
                        <span class="border border-dark px-1 mb-1 mr-2 d-inline-block">{member.faculty}</span>
                        <span class="border border-dark px-1 d-inline-block">{member.highschool}</span>
                      </div>
                      <div class="pb-1">
                        {member.positions.map(pos => (
                          <span class="border border-dark px-1 mr-1 mb-1 d-inline-block">{pos}</span>
                        ))}
                      </div>
                      <div class="pb-1">{member.comment}</div>
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

export default MemberIntroPage

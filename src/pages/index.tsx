import React from "react"

import Layout from "../components/layout"

const oldHomePageUrl: string = 'http://jfn.josuikai.net/circle/sports/badminton/index.html'

const IndexPage: React.FC = () => (
  <Layout>
    <section>
      <div className="alert alert-info">
        <div>こちらは非公式版です。<br />最新の情報は <a target="_blank" href={oldHomePageUrl}>こちら</a> からご確認下さい。</div>
      </div>
    </section>
  </Layout>
);

export default IndexPage

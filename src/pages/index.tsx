import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const oldHomePageUrl: string = 'http://jfn.josuikai.net/circle/sports/badminton/index.html'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div className="alert alert-info">
      <div>こちらは非公式版です。<br />最新の情報は <a target="_blank" href={oldHomePageUrl}>こちら</a> からご確認下さい。</div>
    </div>
    <div className="jumbotron text-center bg-white px-1">
      <h1 className="heading">一橋大学<br />バドミントン部</h1>
      <span className="font-italic">Hitotsubashi University Badminton Club was established in 1952.</span>
    </div>
  </Layout>
)

export default IndexPage

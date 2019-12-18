import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const oldHomePageUrl = 'http://jfn.josuikai.net/circle/sports/badminton/index.html'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="alert alert-info">
      <div>こちらは非公式版です。<br />最新の情報は <a target="_blank" href={oldHomePageUrl}>こちら</a> からご確認下さい。</div>
    </div>
    <div class="jumbotron text-center bg-white px-1">
      <h1 class="heading">一橋大学<br />バドミントン部</h1>
      <span class="font-italic">Hitotsubashi University Badminton Club was established in 1952.</span>
    </div>
  </Layout>
)

export default IndexPage

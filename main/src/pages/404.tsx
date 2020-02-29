import React from "react"

import Layout from "../components/Layout"
import pageMetadata from "../pageMetaData";

const NotFoundPage = () => (
  <Layout pageMetadata={pageMetadata[404]}>
    <h1>ページが見つかりません</h1>
  </Layout>
)

export default NotFoundPage

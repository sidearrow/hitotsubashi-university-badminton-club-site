import React from "react"

import Layout from "../components/layout"
import config from "../config/configIndex";

const NotFoundPage = () => (
  <Layout pageMetadata={config.pageMetadata[404]}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

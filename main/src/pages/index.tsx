import * as React from "react"
import Layout from "../components/layout"
import pageMetadata from "../pageMetaData";
import TwitterTimeline from "../components/twitterTImeline";

const oldHomePageUrl: string = 'http://jfn.josuikai.net/circle/sports/badminton/index.html'

const IndexPage: React.FC = () => (
  <Layout pageMetadata={pageMetadata.index}>
    <TwitterTimeline />
  </Layout>
);

export default IndexPage

import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Component: React.FC = () => (
  <Layout>
    <SEO title="部活情報" />
    <h1 className="hub-h1">リーグ戦結果</h1>
  </Layout>
)

export default Component

export const IndexQuery = graphql`
  query {
    allLeagueResultCsv {
      edges {
        node {
          league_id
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PageTitle from '../../components/pageTitle';

const Component: React.FC = () => {
  return (
    <Layout>
      <SEO title="部活情報" />
    </Layout>
  )
}

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

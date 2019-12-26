import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class LeagueResultPages extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <Layout>
        <SEO title="部活情報" />
        <h1 class="hub-h1">リーグ戦結果</h1>
      </Layout>
    )
  }
}

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

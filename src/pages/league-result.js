import React from 'react'
import { graphql } from 'gatsby';

export default class LeagueResultPages extends React.Component {
  render() {
    console.log(this.props.data)
    return (<div>リーグ</div>)
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

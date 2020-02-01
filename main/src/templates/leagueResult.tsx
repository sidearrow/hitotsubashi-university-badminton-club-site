import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { PageMetadata } from '../pageMetaData';

type LeagueResultQueryResponse = {
  summary: {
    edges: {
      node: {
        title: string;
      }
    }[]
  }
  team: {
    edges: {
      node: {
        name: string;
        name_short: string;
        rank: string;
        w: string;
        l: string;
        w1: string;
        l1: string;
        remarks1: string;
        w2: string;
        l2: string;
        remarks2: string;
        w3: string;
        l3: string;
        remarks3: string;
        w4: string;
        l4: string;
        remarks4: string;
        w5: string;
        l5: string;
        remarks5: string;
        w6: string;
        l6: string;
        remarks6: string;
      }
    }[];
  }
  individual: {
    group: {
      edges: {
        node: {
          mc1: string;
          mc2: string;
          name11: string;
          name12: string;
          name21: string;
          no1: string;
          no2: string;
          name22: string;
          remarks: string;
          s01: string;
          s11: string;
          s12: string;
          s21: string;
          s22: string;
          s31: string;
          s32: string;
        }[];
      }[];
    }
  }
}

const Component: React.FC<{
  data: LeagueResultQueryResponse
  pageContext: {
    leagueId: Number;
  }
}> = ({ data, pageContext }) => {
  console.log(pageContext)
  console.log(data)

  const pageMetadata: PageMetadata = {
    path: `/result/league/${pageContext.leagueId}`,
    title: data.summary.edges[0].node.title,
    description: '',
    breadcrumb: '' || [],
  };

  return (
    <Layout pageMetadata={pageMetadata}>
      <div className="markdown">
        <div></div>
      </div>
    </Layout>
  );
}

export default Component;

export const query = graphql`
query($leagueId: String!) {
  summary: allLeagueResultSummaryCsv(filter: {league_id: {eq: $leagueId}}) {
    edges {
      node {
        title
      }
    }
  }
  team: allLeagueResultTeamCsv(filter: {league_id: {eq: $leagueId}}) {
    edges {
      node {
        name
        name_short
        rank
        w
        l
        w1
        l1
        remarks1
        w2
        l2
        remarks2
        w3
        l3
        remarks3
        w4
        l4
        remarks4
        w5
        l5
        remarks5
        w6
        l6
        remarks6
      }
    }
  }
  individual: allLeagueResultIndividualCsv(filter: {league_id: {eq: $leagueId}}) {
    group(field: no1) {
      edges {
        node {
          mc1
          mc2
          name11
          name12
          name21
          no1
          no2
          name22
          remarks
          s01
          s11
          s12
          s21
          s22
          s31
          s32
        }
      }
    }
  }
}
`;

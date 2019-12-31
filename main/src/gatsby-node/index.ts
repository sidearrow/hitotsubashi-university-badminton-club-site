import axios from 'axios';
import path from 'path';
import { GatsbyNode } from 'gatsby';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});

const getLeagueResultData = async () => {
  return await http.get('/league-result');
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions: {createPage}
}) => {
  const leagueResultData = await getLeagueResultData();

  createPage({
    path: '/result/league',
    component: path.resolve('src/templates/league.tsx'),
    context: { data: leagueResultData.data }
  });
}

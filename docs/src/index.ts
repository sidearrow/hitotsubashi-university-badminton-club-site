import * as express from 'express';
import leagueResultAction from './actions/leagueResultAction';
import leagueResultDetailMarkdownAction from './actions/leagueResultDetailMarkdownAction';

const app = express();
const port = 3000;

app.get('/league-result', leagueResultAction);
app.get('/league-result/:leagueId/markdown', leagueResultDetailMarkdownAction);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

import * as express from 'express';
import leagueResultDetailAction from './actions/leagueResultDetailAction';
import leagueResultAction from './actions/leagueResultAction';

const app = express();
const port = 3000;

app.get('/league-result', leagueResultAction);
app.get('/league-result/:leagueId', leagueResultDetailAction);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

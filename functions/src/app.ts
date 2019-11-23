import * as express from 'express';
import { bbsIndexHadler } from './handlers';

const app = express();

app.get('/', bbsIndexHadler);
app.get('/obmessage/:fileName');

export default app;

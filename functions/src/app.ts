import * as express from 'express';
import { bbsIndexHadler } from './handlers';

const app = express();

app.get('/', bbsIndexHadler);

export default app;

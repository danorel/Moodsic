import 'babel-polyfill';
import path from 'path';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import serverApi from './src/api';
import serverMiddleware from './middleware';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// I recommend use it only for development
// In production env you can use Nginx or CDN
app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(express.static(path.resolve(__dirname, '../static')));

app.get('/api', serverApi);

app.get('/*', serverMiddleware);

export { app };

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import compression from 'compression';

import serverMiddleware from './middleware';

import { initParsers } from './src/middleware/parsers';
import { initSession } from './src/middleware/session';
import { initServices } from './src/services';

const initRoutes = require('./src/api');

const app = express();

initParsers(app);
initSession(app);
initServices();

// I recommend use it only for development
// In production env you can use Nginx or CDN
app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(express.static(path.resolve(__dirname, '../static')));

initRoutes(app);

app.get('/*', serverMiddleware);

export { app };

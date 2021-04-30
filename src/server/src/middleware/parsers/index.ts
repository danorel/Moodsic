import { Application } from 'express';

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const initParsers = (app: Application) => {
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
};

export { initParsers };

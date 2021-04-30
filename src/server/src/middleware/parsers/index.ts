import { Application } from 'express';

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

export default (app: Application) => {
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
};

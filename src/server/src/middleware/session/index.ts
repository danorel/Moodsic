import { Application } from 'express';
import session from 'express-session';
import passport from 'passport';

import * as SessionType from './types';

const initSession = (app: Application) => {
    app.use(
        session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 24 * 60 * 60 * 1000 },
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
};

export { initSession };

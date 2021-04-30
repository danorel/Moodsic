import express, { Application, Request, Response, NextFunction } from 'express';
import to from 'await-to-js';

const Musiclover = require('../../models/Musiclover');

const app: Application = express();

type MusicloverResponse = {
    email: string;
};

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const [err, oneMusiclover] = await to<MusicloverResponse>(Musiclover.findOne({}));
    if (err) return next(err);

    return res.status(200).send({
        email: oneMusiclover.email,
    });
});

app.get('/authentication', (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.isAuthorized) return res.status(401).send({ isAuthorized: false });

    return res.status(200).send({ isAuthorized: true });
});

export default app;

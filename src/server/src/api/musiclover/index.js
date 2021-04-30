const express = require('express');
const to = require('await-to-js');

const Musiclover = require('../../models/Musiclover');

const app = express();

app.get('/', async (req, res, next) => {
    const [err, oneMusiclover] = await to(Musiclover.findOne({}));
    if (err) return next(err);

    return res.status(200).send({
        email: oneMusiclover.email,
    });
});

app.get('/authentication', (req, res, next) => {
    if (!req.session.isAuthorized) return res.status(401).send({ isAuthorized: false });

    return res.status(200).send({ isAuthorized: true });
});

module.exports = app;

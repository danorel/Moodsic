const express = require('express');
const to = require('await-to-js');

const Playlist = require('../../models/Playlist');

const app = express();

app.get('/', async (req, res, next) => {
    const [err, playlists] = await to(Playlist.find({}));
    if (err) return next(err);

    return res.status(200).send({
        playlists: playlists,
    });
});

module.exports = app;

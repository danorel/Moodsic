import express, { Application, Request, Response, NextFunction } from 'express';
import to from 'await-to-js';

const Playlist = require('../../models/Playlist');

const app: Application = express();

type GetPlaylistsResponse = [];

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const [err, playlists] = await to<GetPlaylistsResponse>(Playlist.find({}));
    if (err) return next(err);

    return res.status(200).send({
        playlists: playlists,
    });
});

export default app;

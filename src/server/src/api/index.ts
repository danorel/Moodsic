import express from 'express';

const app = express();

app.use('/playlists', require('./playlists'));
app.use('/musiclover', require('./musiclover'));

export default app;

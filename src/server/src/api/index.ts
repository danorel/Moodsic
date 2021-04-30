import { Application } from 'express';

const initRoutes = (app: Application) => {
    app.use('/playlists', require('./playlists'));
    app.use('/musiclover', require('./musiclover'));
};

export { initRoutes };

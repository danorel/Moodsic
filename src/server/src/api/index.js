const initRoutes = app => {
    app.use('/playlists', require('./playlists'));
    app.use('/musiclover', require('./musiclover'));
};

module.exports = initRoutes;

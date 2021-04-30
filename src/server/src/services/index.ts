const { initMongo } = require('./mongo/index');

const initServices = () => {
    initMongo('mongodb://localhost:27017/moodsic');
};

export { initServices };

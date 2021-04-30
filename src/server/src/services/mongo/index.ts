const mongoose = require('mongoose');

const connectToDb = (connectionString: string) => {
    mongoose.connect(
        connectionString,
        {
            useNewUrlParser: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            connectTimeoutMS: 10000,
        },
        (err: Error) => console.log(err)
    );
};

const initMongo = (connectionString: string) => {
    connectToDb(connectionString);
    const db = mongoose.connection;
    /* Check up the connection to our database */
    db.once('open', () => console.log('MongoDB was connected successfully!'));
    /* Check up for any errors in that connection */
    db.on('error', (err: Error) => console.log(`Error with database may happened: ${err}`));
};

export { initMongo };

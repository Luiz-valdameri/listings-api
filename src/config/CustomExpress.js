const express = require('express');
const bodyParser = require('body-parser')
const consign = require('consign')
const cors = require('cors')
const mongoose = require('mongoose');

module.exports = () => {
    const app = express();

    mongoose.connect('mongodb://localhost:27017/listings-api');

    app.use(bodyParser.json());
    app.use(cors())

    consign()
        .include('./src/controllers')
        .into(app);


    // (async () => {
    //     const database = require('./dataBase');

    //     try {
    //         await database.sync();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // })();

    return app;
}
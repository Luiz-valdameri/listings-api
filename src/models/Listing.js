const mongoose = require('../config/DatabaseConfig');

const Listing = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    type: ObjectId,
    user: ObjectId,
    creationDate: Date,
    rating: Number,
    numberOfRatings: Number,
}, { collection: 'users' });

module.exports = { Listing }
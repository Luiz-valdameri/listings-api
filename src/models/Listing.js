const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    type: ObjectId,
    user: ObjectId,
    creationDate: Date,
    rating: Number,
    numberOfRatings: Number,
}, { collection: 'listings' });

const Listing = mongoose.model('Listing', ListingSchema)

module.exports = Listing
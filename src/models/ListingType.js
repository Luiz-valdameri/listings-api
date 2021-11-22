const mongoose = require('mongoose');

const ListingTypeSchema = new mongoose.Schema({
    name: String
}, { collection: 'listingType' });

const ListingType = mongoose.model('ListingType', ListingTypeSchema)

module.exports = ListingType
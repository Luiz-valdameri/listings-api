const mongoose = require('../config/DatabaseConfig');

const ListingTypes = new mongoose.Schema({
    name: String
}, { collection: 'users' });

module.exports = { ListingTypes }
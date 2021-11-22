const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/listings-api');

module.exports = {mongoose}
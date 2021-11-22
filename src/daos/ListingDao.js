const Listing = require("../models/Listing")

class ListingDao {

    list = (type = null) => {

        return new Promise(async (resolve, reject) => {
            try {
                if (type) {
                    resolve(await Listing.find({ type: type }));
                }
                else {
                    resolve(await Listing.find({}));
                }
            } catch (err) {
                reject(err.toString());
            };
        })
    }

    create = (listing) => {

        return new Promise(async (resolve, reject) => {
            try {
                resolve(await Listing.create(listing));
            } catch (err) {
                reject(err.toString());
            };
        })
    }

    changeRating = (listing) => {

        return new Promise(async (resolve, reject) => {
            try {
                resolve(await Listing.updateOne({ _id: listing._id }, { $set: { rating: listing.rating, numberOfRatings: listing.numberOfRatings } }));
            } catch (err) {
                reject(err.toString());
            };
        })
    }

    listById = (id) => {

        return new Promise(async (resolve, reject) => {
            try {
                resolve(await Listing.findOne({ _id: id }));
            } catch (err) {
                reject(err.toString());
            };
        })
    }

}

module.exports = new ListingDao;
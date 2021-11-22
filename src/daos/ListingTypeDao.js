const ListingType = require("../models/ListingType")

class ListingTypeDao {

    list = () => {

        return new Promise(async (resolve, reject) => {
            try {
                resolve(await ListingType.find({}));
            } catch (err) {
                reject(err.toString());
            };
        })
    }

    create = (listing) => {

        return new Promise(async (resolve, reject) => {
            try {
                resolve(await ListingType.create(listing));
            } catch (err) {
                reject(err.toString());
            };
        })
    }

}

module.exports = new ListingTypeDao;
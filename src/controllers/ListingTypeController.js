const ListingTypeDao = require("../daos/ListingTypeDao");

module.exports = app => {

    app.post('/listingType', (req, res) => {
        var { listingType } = req.body;

        ListingTypeDao.create(listingType)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })

    })

    app.get('/listingType', (req, res) => {
 
        ListingTypeDao.list()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
    })

}
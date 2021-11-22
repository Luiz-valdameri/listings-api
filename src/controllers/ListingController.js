const ListingDao = require("../daos/ListingDao");

module.exports = app => {

    app.post('/listing', (req, res) => {
        var { listing } = req.body;

        listing.rating = 0;
        listing.numberOfRatings = 0;

        ListingDao.create(listing)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })

    })

    app.get('/listing', (req, res) => {
        const { type } = req.query;

        ListingDao.list(type)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    })

    app.put('/listing/rate', (req, res) => {
        const { _id, rating } = req.body.listing;

        ListingDao.listById(_id).then(listing => {

            listing.numberOfRatings ? listing.numberOfRatings += 1 : listing.numberOfRatings = 1;
            listing.rating = (listing.rating + rating) / listing.numberOfRatings;
    
                ListingDao.changeRating(listing)
                .then(response => {
                    res.status(200).json(response)
                })
                .catch(err => {
                    res.status(500).json({ message: err })
                })
        })
        .catch(err => {
            res.status(500).json({ message: err })
        });

    })

}
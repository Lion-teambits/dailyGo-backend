const Badge = require("../models/Badge");

const createBadge = (req, res) => {
    let newBadge = new Badge(req.body);
    
    newBadge
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getBadge = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        res.status(404).json("Badge not found");
    } else {
        Badge.findOne({ _id: id }).exec()
        .then(results => {
            if (results != null) {
                res.status(200).json(results);
            } else {
                res.status(404).json(results);
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }
};

module.exports = { createBadge, getBadge };
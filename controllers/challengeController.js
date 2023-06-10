const Challenge = require("../models/Challenge");

const createChallenge = (req, res) => {
    let newChallenge = new Challenge(req.body);
    
    newChallenge
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getChallenge = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        Challenge.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        Challenge.findOne({ _id: id }).exec()
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
}


const updateChallenge = (req, res) => {
    Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = { createChallenge, getChallenge, updateChallenge }
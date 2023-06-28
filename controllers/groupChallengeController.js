const GroupChallenge = require("../models/GroupChallenge");

const createGroupChallenge = (req, res) => {
    let newChallengeProgress = new GroupChallenge(req.body);
    
    newChallengeProgress
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getGroupChallenge = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        GroupChallenge.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        GroupChallenge.findOne({ _id: id }).exec()
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

const updateGroupChallenge = (req, res) => {
    GroupChallenge.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = {createGroupChallenge, getGroupChallenge, updateGroupChallenge};
const ChallengeProgress = require("../models/ChallengeProgress");

const createChallengeProgress = (req, res) => {
    let newChallengeProgress = new ChallengeProgress(req.body);
    
    newChallengeProgress
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getChallengeProgress = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        ChallengeProgress.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        ChallengeProgress.findOne({ _id: id }).exec()
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

const updateChallengeProgress = (req, res) => {
    ChallengeProgress.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const deleteChallengeProgress = (req, res) => {
    const id = req.params.id;
    ChallengeProgress.findOneAndDelete({ _id: id })
    .then(results => {
        if (results != null) {
            res.status(200).json("Delete completed");
        } else {
            res.status(404).json("Delete fail: id not found");
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

module.exports = {createChallengeProgress, getChallengeProgress,
                updateChallengeProgress, deleteChallengeProgress};
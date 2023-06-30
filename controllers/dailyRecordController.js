const DailyRecord = require("../models/DailyRecord");

const createDailyRecord = (req, res) => {
    let newDailyRecord = new DailyRecord(req.body);
    
    newDailyRecord
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getDailyRecord = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        DailyRecord.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        DailyRecord.findOne({ _id: id }).exec()
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

const getDailyRecordByDate = (req, res) => {
    const id = req.params.date;
    if (typeof id == "undefined") {
        DailyRecord.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        DailyRecord.findOne({ date: id }).exec()
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

const getDailyRecordByUid = (req, res) => {
    const id = req.params.uid;
    if (typeof id == "undefined") {
        DailyRecord.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        DailyRecord.find({ uid: id }).exec()
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

const updateDailyRecord = (req, res) => {
    DailyRecord.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = { createDailyRecord, getDailyRecord, updateDailyRecord,
                getDailyRecordByDate, getDailyRecordByUid };
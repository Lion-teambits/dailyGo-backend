const User = require("../models/User");

const createUser = (req, res) => {
    let newUser = new User(req.body);
    newUser
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getUser = (req, res) => {
    const id = req.param.id;
    
    if (typeof id == "undefined") {
        res.status(404).json("User not found");
    } else {
        User.findOne({ uid: id })
            .exec()
            .then((results) => {
                if (results != null) {
                    res.status(200).json(results);
                } else {
                    res.status(404).json(results);
                }   
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }
};

const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(results => {
        if (results != null) {
            res.status(200).json("Delete completed");
        } else {
            res.status(404).json("Delete fail: Step not found");
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
};

module.exports = { createUser, getUser, updateUser, deleteUser };
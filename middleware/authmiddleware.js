const admin = require("../configs/firebase.config");
require("dotenv").config();

const authJWT = async (req, res, next) => {
    const accessToken = req.header("Authorization");
    if (accessToken == null) {
        res.status(403).json({success:false, errormessage:"Authentication fail"});
    } else {
        admin
            .auth()
            .verifyIdToken(accessToken)
            .then(function (decodedToken) {
                return next();
            })
            .catch(function (error) {
                return res.sendStatus(403);
            });
    }
};

module.exports = { authJWT };
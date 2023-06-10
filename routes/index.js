const express = require("express");
const router = express.Router({ mergeParams: true});

const userRouter = require("./user");
const challengeRouter = require("./challenge");
const dailyRecord = require("./dailyRecord");

router.use(userRouter);
router.use(challengeRouter);
router.use(dailyRecord);


module.exports = router;
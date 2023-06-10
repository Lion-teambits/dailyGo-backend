const express = require("express");
const router = express.Router({ mergeParams: true});

const userRouter = require("./user");
const challengeRouter = require("./challenge");
const dailyRecordRouter = require("./dailyRecord");
const badgeRouter = require("./badge");

router.use(userRouter);
router.use(challengeRouter);
router.use(dailyRecordRouter);
router.use(badgeRouter);

module.exports = router;
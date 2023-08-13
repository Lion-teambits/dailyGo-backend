const express = require("express");
const router = express.Router({ mergeParams: true});

const userRouter = require("./user");
const challengeProgressRouter = require("./challengeProgress");
const groupChallengeRouter = require("./groupChallenge");
const dailyRecordRouter = require("./dailyRecord");
const challengeRouter = require("./challenge");
const badgeRouter = require("./badge");

router.use(userRouter);
router.use(challengeProgressRouter);
router.use(groupChallengeRouter);
router.use(dailyRecordRouter);
router.use(challengeRouter);
router.use(badgeRouter);

module.exports = router;
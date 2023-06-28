const express = require("express");
const router = express.Router();

const groupChallengeCtrl = require("../controllers/groupChallengeController");

router.post("/groupChallenge", groupChallengeCtrl.createGroupChallenge);
router.get("/groupChallenge", groupChallengeCtrl.getGroupChallenge);
router.get("/groupChallenge/:id", groupChallengeCtrl.getGroupChallenge);
router.put("/groupChallenge/:id", groupChallengeCtrl.updateGroupChallenge);

module.exports = router;
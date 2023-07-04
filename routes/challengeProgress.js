const express = require("express");
const router = express.Router();

const challengeProgressCtrl = require("../controllers/challengeProgressController");

router.post("/challengeProgress", challengeProgressCtrl.createChallengeProgress);
router.get("/challengeProgress", challengeProgressCtrl.getChallengeProgress);
router.get("/challengeProgress/:id", challengeProgressCtrl.getChallengeProgress);
router.put("/challengeProgress/:id", challengeProgressCtrl.updateChallengeProgress);
router.delete("/challengeProgress/:id", challengeProgressCtrl.deleteChallengeProgress);

module.exports = router;
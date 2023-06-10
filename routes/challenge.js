const express = require("express");
const router = express.Router();

const challengeCtrl = require("../controllers/challengeController");

router.post("/challenge", challengeCtrl.createChallenge);
router.get("/challenge", challengeCtrl.getChallenge);
router.get("/challenge/:id", challengeCtrl.getChallenge);
router.put("/challenge/:id", challengeCtrl.updateChallenge);

module.exports = router;
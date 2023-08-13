const express = require("express");
const router = express.Router();

const badgeCtrl = require("../controllers/badgeController");

router.post("/badge", badgeCtrl.createBadge);
router.get("/badge/:id", badgeCtrl.getBadge);

module.exports = router;
const express = require("express");
const router = express.Router();

const dailyRecordCtrl = require("../controllers/dailyRecordController");

router.post("/dailyRecord", dailyRecordCtrl.createDailyRecord);
router.get("/dailyRecord", dailyRecordCtrl.getDailyRecord);
router.get("/dailyRecord/:date", dailyRecordCtrl.getDailyRecord);
router.get("/dailyRecord/uid/:uid", dailyRecordCtrl.getDailyRecordByUid);
router.put("/dailyRecord/:id", dailyRecordCtrl.updateDailyRecord);

module.exports = router;
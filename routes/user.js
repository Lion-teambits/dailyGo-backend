const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userController");

router.post("/user", userCtrl.createUser);
router.get("/user/:uid", userCtrl.getUser);
router.put("/user/:uid", userCtrl.updateUser);
router.delete("/user/:uid", userCtrl.deleteUser);

module.exports = router;
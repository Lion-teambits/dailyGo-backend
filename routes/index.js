const express = require("express");
const router = express.Router({ mergeParams: true});

const userRouter = require("./user");

router.use(userRouter);

module.exports = router;
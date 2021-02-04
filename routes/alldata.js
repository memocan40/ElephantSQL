const express = require("express");
const router = express.Router();

const getAllData = require("../controller/allData");

router.get("/allData", getAllData.logAllData);

module.exports = router;

const express = require("express");
const router = express.Router();
const fileService = require("../services/fileService");

router.get("/", fileService.WriteData);

module.exports = router;

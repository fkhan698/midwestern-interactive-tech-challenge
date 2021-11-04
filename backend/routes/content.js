//Express dependencies
const express = require("express");
const router = express.Router();

//Variable for controller
const contentController = require("../controllers/content.js");
//GET Route
router.get("/", contentController.getContent);
//POST Route
router.post("/", contentController.postContent);

module.exports = router;

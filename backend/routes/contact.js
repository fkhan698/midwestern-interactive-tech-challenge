//Express Dependencies
const express = require("express");
const router = express.Router();

//Variable for controller
const contactController = require("../controllers/contact.js");
//Routes
router.get("/", contactController.getContact);
router.post("/", contactController.postContact);

//Export
module.exports = router;

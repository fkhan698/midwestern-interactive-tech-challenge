const express = require("express");
const router = express.Router();

//Variable for controller
const contactController = require("../controllers/contact.js");

router.get("/", contactController.getContact);
router.post("/", contactController.postContact);

module.exports = router;

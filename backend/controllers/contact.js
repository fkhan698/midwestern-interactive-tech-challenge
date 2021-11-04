//Import Contact Model
const Contact = require("../models/contact.js");

//GET Functionality
exports.getContact = async (req, res) => {
  res.send("Hello There");
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//POST Functionality
exports.postContact = async (req, res) => {
  let contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    title: req.body.title,
    email: req.body.email
  });
  try {
    contact = await contact.save();
    res.status(201).json(contact);
    console.log("Contact created");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

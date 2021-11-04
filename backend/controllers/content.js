//Import Content Model
const Content = require("../models/content.js");

//GET Functionality
exports.getContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//POST Functionality
exports.postContent = async (req, res) => {
  let content = new Content({
    title: req.body.title,
    content: req.body.content,
    page: req.body.page,
    image: req.body.image
  });
  try {
    content = await content.save();
    res.status(201).json(content);
    console.log("Content created");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

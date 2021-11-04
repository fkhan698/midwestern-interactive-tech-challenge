//DOTENV
require("dotenv").config();
// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Routes
const contentRouter = require("./routes/content");
const contactRouter = require("./routes/contact");

//Mongoose Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));
app.use(express.json());

//Use Routers
app.use("/content", contentRouter);
app.use("/contact", contactRouter);

//Listen at 5000
app.listen(5000, () => console.log("Server started"));

require("dotenv").config();
// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Routes
const contentRouter = require("./routes/content");

//Mongoose Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use(express.json());

//Use content router
app.use("/content", contentRouter);

//Listen at 3000
app.listen(3000, () => console.log("Server started"));

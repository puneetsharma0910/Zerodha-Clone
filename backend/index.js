require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URI;

app.listen(PORT, () => {
  console.log("app has started");
  mongoose.connect(uri);
  console.log("mongodb connected");
});

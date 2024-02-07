const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const cors = require('cors')
var https = require("https");

var fs = require("fs");
mongoose.set("strictQuery", false);

const url = "mongodb://0.0.0.0:27017/books";

mongoose.connect(url, (err, client) => {
  if (!err) {
    console.log("successful connection with the server");
  } else console.log("Error in the connectivity");
});

app.use(express.json());
// app.use(cors())
app.use(bodyParser.json());

const quotes = require("./routes/quotes.cjs");
app.use("/quotes_api/Quotes", quotes);

const port = 5023; // Change to any available port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const quotes = require("./routes/quotes.cjs");

mongoose.set("strictQuery", false);

// Database connection
const url = "mongodb://0.0.0.0:27017/books";
mongoose.connect(url, (err, client) => {
  if (!err) {
    console.log("Successful connection with server.");
  } else {
    console.log("Error in the connectivity");
  }
});

app.use(express.json());

// Use the router middleware
app.use("/quotes_api/Quotes", quotes);

app.listen(5033, () => console.log("Server running on port 5033"));

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// //  Database connection
// const url = "mongodb://0.0.0.0:27017/books";
// mongoose.connect(url, (err, client) => {
//   if (!err) {
//     console.log("Successful connection with server.");
//   } else {
//     console.log("Error in the connectivity");
//   }
// });

// app.use(express.json());

// const quotes = require("./routes/quotes.cjs");

// app.use("/quotes_api/Quotes", quotes);

// app.listen(5033, () => console.log("Server running on port 5033"));

// mongodb://localhost:27017
// mongodb://127.0.0.1:27017

// const express = request;

// import express from "express";
// import { mongoose } from "mongoose";

// mongoose
//   .connect(
//     "mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2"
//   )
//   .then(() => {
//     console.log("MongoDB is connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const app = express();
// const PORT = 3000;
// app.use(express.json());

// app.listen(3000, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // app.use("/api/user", userRoutes);
// // app.use("/api/auth", authRoutes);

// // function loadREST(){
// //   fetch("https://kuntalojha.github.io/quotesapi/").then(function(response){
// //     return response.json();
// //   })
// //   .then(function (no) {
// //     let html ="";
// //     no.forEach(function(no) {
// //       html +=`<li> <a>`
// //     });
// //   })
// // }
// // const jasonData = JSON.parse
// // ('  {
// //     "no": 1,
// //     "book_no": 1,
// //     "quote": "Every single second we're getting closer to death.",
// //     "category": ["self-help"],
// //     "keyword": ["death"],
// //     "details": [{ "author": "Darius Foroux", "page": 10 }]
// //   }
// // ');

// // const jsonData = JSON.parse(
// //   '{"no": 1, "book_no": 1, "quote": "Every single second we\'re getting closer to death.", "category": ["self-help"], "keyword": ["death"], "details": [{"author": "Darius Foroux", "page": 10}]}'
// // );

// // console.log(jsonData.no);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

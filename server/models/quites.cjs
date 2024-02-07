import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  no: Number,
  book_no: Number,
  quote: String,
  category: Array,
  keyword: Array,
  details: Array,
});

const quote = mongoose.model("quote", userSchema);

export default quote;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: true
    },
    authors: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    image: {
      type: String,
      trim: true
    },
    link: {
      type: String,
      trim: true
    }
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
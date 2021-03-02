var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var bookSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: "Enter title of book."
    },
    authors: {
      type: String,
      trim: true,
      required: "Enter author of book."
    },
    description: {
      type: String,
      trim: true,
      required: "Enter description of book."
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
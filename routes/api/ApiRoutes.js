var router = require("express").Router();
// var controller;

// Get all saved books as json
router
.route("/api/books")
.get(booksController.findAll)
.post(booksController.create);

// Save neww books to database
router
.route("/api/books")
.get(booksController.finadAll)
.post(booksController.create);


// Delete books from database by mongo _id
router
  .route("/api/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// /google will do api call and return results



// * get everything upon page load
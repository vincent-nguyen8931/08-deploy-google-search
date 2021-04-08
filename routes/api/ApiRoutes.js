var router = require("express").Router();
var Book = require("../../models/Book")
var bookGet;

// Get all saved books as json
router.get("/api/Book", (req, res) => {
  Book.find({})
  .sort()
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// Save new books to database
router.post("/api/Book", ({ body }, res) => {
  Book.insert(body)
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

// Delete books from database by mongo _id
router.delete("/api/Book/:id", ({ body }, res) => {
  Book.deleteOne(body)
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})


// * get everything upon page load. go through mongoose and retrieve everything

module.exports = router;
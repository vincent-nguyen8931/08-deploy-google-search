import axios from "axios";
var BaseURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
  getBooks: function (query) {
    return axios.get(BaseURL + query)
  },

  findAll: function () {
   return axios.get("/api/Book")
      // .find()
      // .sort("title")
      // .then(book => res.status(200).json(book))
      // .catch(err => res.status(503).json(err));
  },
  
  // create
  create: function(req, res) {
    return axios.post("/api/Book", res)
    // db.Book
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },

  // find by id
  findById: function(req, res) {
    return axios.get("/api/Book/:id")
    // db.Book
    //   .findById(req.params.id)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  
  // update
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // Delete books from database by mongo _id
// router.delete("/api/Book/:id", ({ body }, res) => {
//   Book.deleteOne(body)
//   .then(dbBook => {
//     res.json(dbBook);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// })

// };
}
import axios from "axios";
var BaseURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
  getBooks: function (query) {
    return axios.get(BaseURL + query)
  },

  findAll: function () {
    return axios.get("/api/Book")

  },

  // create
  create: function (req, res) {
    return axios.post("/api/Book", res)

  },

  // find by id
  findById: function (req, res) {
    return axios.get("/api/Book/:id")

  },

  // Delete books from database by mongo _id
  delete: function (req, res) {
    return axios.delete("/api/Book/:id")

  }

}
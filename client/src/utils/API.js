import axios from "axios";
var BaseURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
  getBooks: function (query) {
    return axios.get(BaseURL + query)
  }
}
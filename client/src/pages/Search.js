
import React, { Component } from "react";
import BookSearch from "../components/BookSearch";
import Results from "../components/Results";
import API from "../utils/API";

// import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  

  // make the api call to google books
  saveBook = bookClicked => {

  API.create({
    title: bookClicked.title,
    authors: bookClicked.authors,
    description: bookClicked.description,
    image: bookClicked.image,
    link: bookClicked.link,
  })
  .then(res => console.log("Book saved!", res))
  .catch(err => console.log("Error has occured in book creation.", err))
   
}

//  render results of book search based on the user's text
callAPI() {
  fetch(// route created)
}
  render() {
    return (
      <div>
        <BookSearch />
        <Results />
      </div>
    )
  }
}

export default Search;
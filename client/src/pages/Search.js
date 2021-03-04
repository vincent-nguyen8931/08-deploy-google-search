
import React, { useEffect, useState, Component } from "react";
import BookSearch from "../components/BookSearch";
import ResultList from "../components/ResultList";
import Results from "../components/Results";
import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
        search: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();

    }

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

    searchBook = () => {
        API.getBooks(this.state.search)
            .then(res => this.setState({ books: res.data.items, search: "" }))
            .catch(err => console.error(err))
    }

    handleInputChange = event => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };


render() {
  return (
    <div>
     <div className="jumbotron" >
        <h2 className="display-4">Book Search</h2>
        <p className="lead">Book: </p>
        <input
          class="form-control"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          placeholder="Enter book name"></input>

        <button onClick={this.handleFormSubmit}
          className="btn btn-primary">Search</button>

      </div >
    <ResultList
    books={this.state.books}
    saveBooks={this.saveBook}
    />
    </div>
  )
}
    
  }

    export default Search;






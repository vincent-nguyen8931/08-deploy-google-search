import React from "react";
import { Component } from "react";
import style from "./style.css";
import API from "../../utils/API"

class BookSearch extends Component {
  state = {
    books: [],
    search: ""
  }

handleInputChange = event => {
  var value = event.target.value;
  var name = event.target.name;
  this.setState({
    [name]: value
  })
};

handleFormSubmit = event => {
  event.preventDefault();
  console.log(this.state.search);
  API
  .getBooks(this.state.search)
  .then(({ data: books }) => {
    this.setState({
      books: books
    })
  })
}

  render() {
    console.log(this.state.books);
    return (

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
        // call books as prop and call new compnent by calling in probs of various variables. list for each of the props being handled.
        
        className="btn btn-primary">Search</button>
      </div >
    );
  }
}

export default BookSearch;

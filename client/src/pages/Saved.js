<<<<<<< HEAD
import React, { Component } from "react";
import API from "../utils/API";
=======
import React from "react";
import { Component } from "react";
>>>>>>> 8733b514b9ecfe9e9dda48925e4028a4b3fb7b91
import SavedBooks from "../components/SavedBooks";
// import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
<<<<<<< HEAD
    state = {
        SavedBooks: [],
    }

    componentDidMount() {
        API.SavedBooks()
            .then(SavedBooks => this.setState({ SavedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            
        )
    }

=======
>>>>>>> 8733b514b9ecfe9e9dda48925e4028a4b3fb7b91

  

<<<<<<< HEAD

=======
  render() {
    return (
      <div>
        <SavedBooks />
      </div>
    )
  }
>>>>>>> 8733b514b9ecfe9e9dda48925e4028a4b3fb7b91
}
export default Search;


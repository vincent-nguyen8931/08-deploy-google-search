import React from "react";
import { Component } from "react";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
    state = {
      saveBooks: [],
    }

    componentDidMount() {
        API.create()
            .then(saveBooks => this.setState({ saveBooks: saveBooks }))
            .catch(err => console.error(err));
    }


  

  render() {
    return (
      <div>
        <SavedBooks />
      </div>
    )
  }
}
export default Saved;


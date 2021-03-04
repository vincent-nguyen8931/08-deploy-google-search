import React, { Component } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";
// import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
    state = {
        SavedBooks: [],
    }

    componentDidMount() {
        API.SavedBooks()
            .then(SavedBooks => this.setState({ SavedBooks: SavedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            
        )
    }




}
export default Search;


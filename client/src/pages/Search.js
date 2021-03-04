
import React, { useEffect, useState } from "react";
// import BookSearch from "../components/BookSearch";
// import Results from "../components/Results";
import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends React.Component {
    state = {
        Search: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();

    }

    bSchema = bookSchema => {
        return {

            title: bookSchema.volumeInfo.title,
            authors: bookSchema.volumeInfo.authors,
            description: bookSchema.volumeInfo.description,
            image: bookSchema.volumeInfo.imageLinks.thumbnail,
            link: bookSchema.volumeInfo.previewLink
        }

    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookSchema => this.bSchema(bookSchema)) }))
            .catch(err => console.error(err));
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
            
        )
    }

    export default Search;








}





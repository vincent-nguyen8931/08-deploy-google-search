
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
        API.getBooks(query)
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
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    hanleFormSubmit={this.handleFormSubmit}
                />

                <div className="container">
                    <h3>Results: </h3>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}
export default Search;






    // class Search extends Component {


    //     // make the api call to google books
    //     saveBook = bookClicked => {

    //         API.create({
    //             title: bookClicked.title,
    //             authors: bookClicked.authors,
    //             description: bookClicked.description,
    //             image: bookClicked.image,
    //             link: bookClicked.link,
    //         })
    //             .then(res => console.log("Book saved!", res))
    //             .catch(err => console.log("Error has occured in book creation.", err))

    //     }

    //  render results of book search based on the user's text

// }





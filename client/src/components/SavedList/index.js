import React, { Component } from 'react'
import SavedListItem from "../SavedListItem";

class SavedList extends Component {
    render() {

        return (
            this.props.books.map((book) => (
                <SavedListItem
                    title={book.volumeInfo.title}
                    link={book.volumeInfo.previewLink}
                    authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks}
                    description={book.volumeInfo.description}
                    deleteBook={this.props.deleteBook}

                />
            ))
        )
    }
}

export default SavedList;

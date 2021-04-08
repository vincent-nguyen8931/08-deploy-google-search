import React, { Component } from 'react'
import ResultListItem from "../ResultListItem";

class ResultList extends Component {
    render() {

        return (
            this.props.books.map((book) => (
                <ResultListItem
                    title={book.volumeInfo.title}
                    link={book.volumeInfo.previewLink}
                    authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
                    description={book.volumeInfo.description}
                    saveBooks={this.props.saveBooks}

                />
            ))
        )
    }
}

export default ResultList



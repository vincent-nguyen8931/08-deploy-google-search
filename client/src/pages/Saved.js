import React from "react";
import { Component } from "react";
import SavedBooks from "../components/SavedBooks";
import SavedList from "../components/SavedList";
import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
    state = {
        saveBooks: [],
    }

    componentDidMount = () => {
        this.findAll()
    }

    findAll = () => {
        API.findAll()
            .then(saveBooks => this.setState({ saveBooks: saveBooks.data }))
            .catch(err => console.error(err));
    }

    deleteBook = () => {
        API.delete()
            .then(saveBooks => this.setState({ saveBooks: saveBooks.data }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <div className="jumbotron" >
                    <h2 className="display-4">Saved Books</h2>
                    <p className="lead">Book: </p>
                    {this.state.saveBooks.length ? (
                        <SavedList
                            books={this.state.saveBooks}
                            deleteBooks={this.deleteBook}
                        />
                    ) : (
                            <h3>No results to display</h3>
                        )}

                </div>
            </div>
        )
    }
}
export default Saved;


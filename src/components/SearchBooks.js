import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/api/BooksAPI';
import ListOfBooks from './ListOfBooks';
class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchBookResults: [],
            searchBookWord: ''
        }
    }

    /**
     * A method to accept the event as a parameter with its value as the search word or query
     * and calls the `search()` method from the `BooksAPI` endpoint.
     * It will then update the `searchBookResults` state with the data returned from the promise
     * @param {object} e 
     */
    searchForBook = (e) => {

        const word = e.target.value;

        if (word !== '' || word !== null) {
            BooksAPI.search(word.trim()).then(booksFound => {
                if ((typeof booksFound !== 'object') || (typeof booksFound !== 'undefined')) {
                    if (booksFound) {
                        this.setState((old) => ({
                            searchBookResults: booksFound
                        }));
                    } else {
                        this.setState({
                            searchBookResults: []
                        })
                    };
                };
            });
        };
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            defaultValue={this.state.searchBookWord}
                            onChange={this.searchForBook}
                        />
                    </div>
                </div>
                <ListOfBooks
                    books={this.state.searchBookResults}
                    moveBookToShelf={this.props.moveBookToShelf}
                    renderList={'search'} />
            </div>
        );
    }
}

export default SearchBooks;
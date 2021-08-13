import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/api/BooksAPI';
import BookFilter from './BookFilter';
import PropTypes from 'prop-types';
class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBookResults: [],
            searchBookWord: ''
        }
    }

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    };

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
                        this.changeState(booksFound)
                    } else {
                        this.changeState([]);
                    };
                };
            });
        } else {
            this.changeState([]);
        }
    }

    /**
     * A method to set a state value
     * @param {object} book 
     */
    changeState(book) {
        this.setState({
            searchBookResults: book
        })
    }

    render() {
        console.log('Results', this.state.searchBookResults)
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
                <div className="search-books-results">
                    <div>
                        <ol className="books-grid">
                            {
                                this.state.searchBookResults.length > 0 && this.state.searchBookResults.map((book, i) => (
                                    <BookFilter
                                        book={book}
                                        books={this.props.books}
                                        moveBookToShelf={this.props.moveBookToShelf}
                                        key={i}
                                    />
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks;
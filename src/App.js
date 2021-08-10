import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import '../src/utils/css/App.css';
import ListOfBooks from './components/ListOfBooks';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from '../src/utils/api/BooksAPI';
class App extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    this.fetchAllBooks();
  }

  /**
   * Gets all books from the `Books API` endpoint and returns a promise which
   * is set as a new state to the `books` state
   */
  fetchAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books
      }))
    });
  };

  /**
   * Moves a book from one `Shelf` to another by calling the `update()` method of
   * the `BooksAPI` endpoint. It then sets the state of the `books` by calling on
   * `filterBookOnMove()`
   * @param {object} book 
   * @param {string} shelfCategory 
   */
  moveBookToShelf = (book, shelfCategory) => {
    BooksAPI.update(book, shelfCategory).then((dataReturned) => {
      book.shelf = shelfCategory;

      this.setState((currentState)=> ({
        books: this.filterBookOnShelfMove(currentState.books, book)
      }));
    });
    // this.forceUpdate();
  }

  /**
   * Takes the books' current state object `currentBooks` and `book` to be changed
   * filters it, etc
   * @param {object} currentBooks 
   * @param {object} book 
   * @returns filtered book object
   */
  filterBookOnShelfMove = (currentBooks, book) => {
    const filtered = currentBooks.filter((theBook) => theBook.id !== book.id).concat(book)
    return filtered;
  }

  render() {
      
    return (
      <div className="app">
        <Route path='/add-book' render={() => (
          <SearchBooks 
            moveBookToShelf={this.moveBookToShelf}
            books={this.state.books}
          />
        )}
        />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ListOfBooks 
                  books={this.state.books} 
                  moveBookToShelf={this.moveBookToShelf}
                  renderList={'main'}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to='/add-book'>
                <button >Add a Book</button>
              </Link>
            </div>
          </div>
        )} />
      </div>
    );
  };
}

export default App;

import React, { Component } from 'react';
import BookGrid from './BookGrid';

class ListOfBooks extends Component {

    shelfCategory = ['currentlyReading', 'wantToRead', 'read'];
    shelfTitle = ['Currently Reading', 'Want to Read', ' Read'];

    render() {
        let groupedBooks = null;
        if (this.props.renderList === 'main') {
            return (
                <div className="list-books-content">
                    <div>
                        {
                            this.shelfCategory.map((category, i) => {
                                groupedBooks = this.props.books.filter((book) =>
                                    book.shelf === category
                                )
                                return (
                                    <div className="bookshelf" key={i}>
                                        <h2 className="bookshelf-title">{this.shelfTitle[i]}</h2>
                                        <div className="bookshelf-books">
                                            <BookGrid
                                                books={groupedBooks}
                                                shelfCategory={this.shelfCategory}
                                                moveBookToShelf={this.props.moveBookToShelf} />
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="search-books-results">
                    <BookGrid
                        books={this.props.books}
                        shelfCategory={this.shelfCategory}
                        moveBookToShelf={this.props.moveBookToShelf} 
                    />
                </div>
            )
        }
    }
}

export default ListOfBooks;
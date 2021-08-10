import React, { Component } from 'react';
import ShelfOptions from './ShelfOptions';
import noBookImage from '../utils/no-image.png';
import BookGrid from './BookGrid';

class ListOfBooks extends Component {
    state = {}
    shelfCategory = ['currentlyReading', 'wantToRead', 'read'];
    shelfTitle = ['Currently Reading', 'Want to Read', ' Read'];

    render() {
        let groupedBooks = null;
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

        );
    }
}

export default ListOfBooks;
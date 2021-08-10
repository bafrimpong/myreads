import React from 'react';
import ShelfOptions from './ShelfOptions';

const BookGrid = (props) => {

    return (
        <ol className="books-grid">
            {
                props.books ? props.books.map((iBook, i) => (
                    <li key={i}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${iBook.imageLinks && iBook.imageLinks.thumbnail ? iBook.imageLinks.thumbnail : ''}")` }}></div>
                                <div className="book-shelf-changer">
                                    <ShelfOptions
                                        book={iBook}
                                        books={props.books}
                                        moveBookToShelf={props.moveBookToShelf} />
                                </div>
                            </div>
                            <div className="book-title">{iBook.title ? iBook.title : 'No Title'}</div>
                            <div className="book-authors">{iBook.authors ? iBook.authors : 'No Author(s)'}</div>
                        </div>
                    </li>
                )) : null
            }
        </ol>
    );
}

export default BookGrid;
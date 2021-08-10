import React from 'react';
import ShelfOptions from './ShelfOptions';

const BookGrid = (props) => {

    return (
        <ol className="books-grid">
            {
                props.books.map((book, i) => (
                    <li key={i}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''}")` }}></div>
                                <div className="book-shelf-changer">
                                    <ShelfOptions 
                                        book={book} 
                                        books={props.books} 
                                        moveBookToShelf={props.moveBookToShelf} />
                                </div>
                            </div>
                            <div className="book-title">{book.title ? book.title : 'No Title'}</div>
                            <div className="book-authors">{book.authors ? book.authors : 'No Author(s)'}</div>
                        </div>
                    </li>
                ))
            }
        </ol>
    );
}

export default BookGrid;
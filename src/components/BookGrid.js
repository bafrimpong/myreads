import React from 'react';
import BookFilter from './BookFilter';
import PropTypes from 'prop-types';

const BookGrid = (props) => {
    return (
        <ol className="books-grid">
            {
                props.books && props.books.length > 0 ? props.books.map((iBook, i) => (
                    <BookFilter
                        book={iBook}
                        books={props.books}
                        moveBookToShelf={props.moveBookToShelf}
                        key={i} />
                )) : null
            }
        </ol>
    );
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
};


export default BookGrid;
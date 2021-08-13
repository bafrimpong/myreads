import React from 'react';
import BookGrid from './BookGrid';
import PropTypes from 'prop-types';

const ListOfBooks = (props) => {

    const shelfCategory = ['currentlyReading', 'wantToRead', 'read'];
    const shelfTitle = ['Currently Reading', 'Want to Read', ' Read'];

    return (
        <div className="list-books-content">
            {
                shelfCategory.map((category, i) => {
                    const groupedBooks = props.books.filter((book) =>
                        book.shelf === category
                    )
                    return (
                        <div className="bookshelf" key={i}>
                            <h2 className="bookshelf-title">{shelfTitle[i]}</h2>
                            <div className="bookshelf-books">
                                <BookGrid
                                    books={groupedBooks}
                                    moveBookToShelf={props.moveBookToShelf}
                                />
                            </div>
                        </div>)
                })
            }
        </div>
    )
}

ListOfBooks.propTypes = {
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
};

export default ListOfBooks;
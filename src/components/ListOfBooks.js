import React from 'react';
import BookGrid from './BookGrid';

const ListOfBooks = (props) => {

    const shelfCategory = ['currentlyReading', 'wantToRead', 'read'];
    const shelfTitle = ['Currently Reading', 'Want to Read', ' Read'];

    // let groupedBooks = null;

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
                                    renderList='main' />
                            </div>
                        </div>)
                })
            }
        </div>
    )
}

export default ListOfBooks;
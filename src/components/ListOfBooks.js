import React from 'react';
import BookGrid from './BookGrid';

const ListOfBooks = (props) => {

    const shelfCategory = ['currentlyReading', 'wantToRead', 'read'];
    const shelfTitle = ['Currently Reading', 'Want to Read', ' Read'];

    let groupedBooks = null;
    if (props.renderList === 'main') {
        return (
            <div className="list-books-content">
                <div>
                    {
                        shelfCategory.map((category, i) => {
                            groupedBooks = props.books.filter((book) =>
                                book.shelf === category
                            )
                            return (
                                <div className="bookshelf" key={i}>
                                    <h2 className="bookshelf-title">{shelfTitle[i]}</h2>
                                    <div className="bookshelf-books">
                                        <BookGrid
                                            books={groupedBooks}
                                            shelfCategory={shelfCategory}
                                            moveBookToShelf={props.moveBookToShelf} />
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
                    books={props.books}
                    shelfCategory={shelfCategory}
                    moveBookToShelf={props.moveBookToShelf}
                />
            </div>
        )
    }

}

export default ListOfBooks;
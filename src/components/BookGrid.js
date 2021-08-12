import React from 'react';
import BookFilter from './BookFilter';

const BookGrid = (props) => {
    // const renderMainListContent = () => {

    //     const content = props.books && props.books.length > 0 ? props.books.map((iBook, i) => (
    //         <li key={i}>
    //             <div className="book">
    //                 <div className="book-top">
    //                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${iBook.imageLinks && iBook.imageLinks.thumbnail ? iBook.imageLinks.thumbnail : ''}")` }}></div>
    //                     <div className="book-shelf-changer">
    //                         <ShelfOptions
    //                             book={iBook}
    //                             books={props.books}
    //                             oldBooks={props.oldBooks}
    //                             newBooks={props.newBooks}
    //                             moveBookToShelf={props.moveBookToShelf}
    //                             renderList={props.renderList} />
    //                     </div>
    //                 </div>
    //                 <div className="book-title">{iBook.title ? iBook.title : 'No Title'}</div>
    //                 <div className="book-authors">{iBook.authors ? iBook.authors : 'No Author(s)'}</div>
    //             </div>
    //         </li>
    //     )) : null
    //     return content;
    // }

    // const renderSearchListContent = () => {
    //     const content = props.newBooks && props.newBooks.length > 0 ? props.newBooks.map((jBook, i) => (
    //         <li key={i}>
    //             <div className="book">
    //                 <div className="book-top">
    //                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${jBook.imageLinks && jBook.imageLinks.thumbnail ? jBook.imageLinks.thumbnail : ''}")` }}></div>
    //                     <div className="book-shelf-changer">
    //                         <ShelfOptions
    //                             book={jBook}
    //                             books={props.newBooks}
    //                             oldBooks={props.oldBooks}
    //                             newBooks={props.newBooks}
    //                             moveBookToShelf={props.moveBookToShelf}
    //                             bookOnShelf={props.bookOnShelf}
    //                             renderList={props.renderList} />
    //                     </div>
    //                 </div>
    //                 <div className="book-title">{jBook.title ? jBook.title : 'No Title'}</div>
    //                 <div className="book-authors">{jBook.authors ? jBook.authors : 'No Author(s)'}</div>
    //             </div>
    //         </li>
    //     )) : null;

    //     return content;
    // }

    // const ret = function () {
    //     let view
    //     if (props.renderList === 'main') {
    //         view = renderMainListContent()
    //     } else {
    //         view = renderSearchListContent()
    //     }
    //     return view;
    // }
    return (
        <ol className="books-grid">
            {
                props.books && props.books.length > 0 ? props.books.map((iBook, i) => (
                    <BookFilter
                        book={iBook}
                        books={props.books}
                        moveBookToShelf={props.moveBookToShelf}
                        renderList={props.renderList} />
                )) : null
            }
        </ol>
    );
}

export default BookGrid;
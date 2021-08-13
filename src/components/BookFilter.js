import React from 'react';
import ShelfOptions from './ShelfOptions';
import PropTypes from 'prop-types';
class BookFilter extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <li >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : ''}")` }}></div>
                        <div className="book-shelf-changer">
                            <ShelfOptions
                                book={this.props.book}
                                books={this.props.books}
                                moveBookToShelf={this.props.moveBookToShelf}
                            />
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title ? this.props.book.title : 'No Title'}</div>
                    <div className="book-authors">{this.props.book.authors ? this.props.book.authors : 'No Author(s)'}</div>
                </div>
            </li>
        );
    }
}

export default BookFilter;
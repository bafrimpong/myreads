import React from 'react';
import PropTypes from 'prop-types';
class ShelfOptions extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    };

    // Holds the value to either of the shelf categories [currentlyReading, wantToRead, read]
    shelfCategory = 'none';

    /**
     * Calls the `moveBookToShelf` method to execute the `update` action of
     * moving a book from a shelf to another
     * @param {object} e 
     */
    handleMoveBookToShelf = (e) => {
        this.props.moveBookToShelf(this.props.book, e.target.value.trim());
    }

    /**
     * Compares a `book` with `all books` in the app based on the `ids` and then
     * assigns the `shelf category` to a variable which is used as the `defaultValue` value
     * in the `select` attribue
     * @returns `shelf category` of type string
     */
    getShelfCategory = () => {
        for (const book of this.props.books) {
            if (book.id === this.props.book.id) {
                this.shelfCategory = book.shelf
            }
        }
        return this.shelfCategory;
    }

    render() {
        return (
            <select onChange={this.handleMoveBookToShelf} defaultValue={this.getShelfCategory()}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        );
    }
}

export default ShelfOptions;
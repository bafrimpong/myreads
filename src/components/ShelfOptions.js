import React from 'react';

class ShelfOptions extends React.Component {

    /**
     * Calls the `moveBookToShelf` method to execute the `update` action of
     * moving a book from a shelf to another
     * @param {object} e 
     */
    handleMoveBookToShelf = (e) => {
        this.props.moveBookToShelf(this.props.book, e.target.value.trim());
    }

    
    shelfCategory = 'none';
    /**
     * Compares a `book` with `all books` in the app based on the `ids` and then
     * assigns the `shelf category` to a variable which is used as the `defaultValue` value
     * in the `select` attribue
     * @returns `shelf category` of type string
     */
    compareBooksAndSetShelfCategory = () => {
        for (let i = 0; i < this.props.books.length; i++) {
            const e = this.props.books[i];
            if(e.id === this.props.book.id && e.shelf){
                this.shelfCategory = e.shelf
            }
        }
        return this.shelfCategory;
    }
    
    render() {
        return (
            <select onChange={this.handleMoveBookToShelf} defaultValue={this.compareBooksAndSetShelfCategory()}>
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

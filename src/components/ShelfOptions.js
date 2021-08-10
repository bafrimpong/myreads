import React from 'react';

const ShelfOptions = (props) => {

    /**
     * Calls the `moveBookToShelf` method to execute the `update` action of
     * moving a book from a shelf to another
     * @param {object} e 
     */
    const handleMoveBookToShelf = (e) =>{
        props.moveBookToShelf(props.book, e.target.value.trim());
    }

    let shelfCategory = 'none'; // as default

    /**
     * Compares a `book` with `all books` in the app based on the `ids` and then
     * assigns the `shelf category` to a variable which is used as the `defaultValue` value
     * in the `select` attribue
     * @returns `shelf category` of type string
     */
    const compareBooksAndSetShelfCategory = () => {
        for (let i = 0; i < props.books.length; i++) {
            const element = props.books[i];
            if(element.id === props.book.id){
                shelfCategory = element.shelf
            } /*else {
                shelfCategory = 'none';
            }*/
        }

        return shelfCategory;
    }

    return (
        <select onChange={handleMoveBookToShelf} defaultValue={compareBooksAndSetShelfCategory()}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    );
}

export default ShelfOptions;
import React, { Component } from 'react';

class Book extends Component {
  render() {

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128, height: 193,
              //Set background image to thumbnail picture when a book is created if the book has an image link (empty if falsy)
              backgroundImage: this.props.book.imageLinks ? `url("${this.props.book.imageLinks.thumbnail}")` : ''
            }}>
          </div>
          <div className="book-shelf-changer">
            <select

              // Update the shelf on change (shelf= event.target.value)
              onChange={(event) => this.props.updateShelf(
                this.props.book, event.target.value
              )}

              // Set the default value of what shelf is displayed in drop down menu to the shelf the book is on
              value={this.props.currentShelf}

            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
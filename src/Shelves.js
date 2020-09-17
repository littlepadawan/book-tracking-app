import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class Shelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    // Filter the array <books> (from app.js) and create another array containing the elements who's shelf matches the statement (.filter)
                    // Create an <li> for every elemt in the new array, displaying the book on the page (.map)
                    this.props.books
                      .filter(book => book.shelf === "currentlyReading")
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            updateShelf={this.props.updateShelf}
                            currentShelf="currentlyReading"
                          />
                        </li>
                      ))
                  }
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    // Filter the array <books> (from app.js) and create another array containing the elements who's shelf matches the statement (.filter)
                    // Create an <li> for every elemt in the new array, displaying the book on the page (.map)
                    this.props.books
                      .filter(book => book.shelf === "wantToRead")
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            updateShelf={this.props.updateShelf}
                            currentShelf="wantToRead"
                          />
                        </li>
                      ))
                  }
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    // Filter the array <books> (from app.js) and create another array containing the elements who's shelf matches the statement (.filter)
                    // Create an <li> for every elemt in the new array, displaying the book on the page (.map)
                    this.props.books
                      .filter(book => book.shelf === "read")//new array with only books want to read
                      .map(book => (//for each element in the new array,create an li for the book
                        <li key={book.id}>
                          <Book
                            book={book}
                            updateShelf={this.props.updateShelf}
                            currentShelf="read"
                          />
                        </li>
                      ))
                  }
                </ol>
              </div>
            </div>

          </div>
        </div>

        <div className="open-search">
          {/* Link to search page - changed from setting state onClick to using Link to=""  */}
          <Link to="/search">Add a book</Link>
        </div>

      </div>
    );
  }
}

export default Shelves;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  state = {
    query: '',
    //Books that match query will be put inside this array
    searchedBooks: []
  }

  //Update query and run updateSearchedBooks when user types in the search field
  updateQuery = (query) => {
    this.setState({
      // By not using quety.trim it's possible to search for multiple words
      query: query
    })
    this.updateSearchedBooks(query);
  }

  //Fetch books that matches the query and put them in the array <searchedBooks>, set the array to be empty if no books match the query
  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        // Set the array to be empty if there is an error, so no books (or error messages) are shown
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] })
        } else {
          this.setState({ searchedBooks: searchedBooks })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">

          {/* Changed from setting state onClick to using Link to=""  */}
          <Link className="close-search" to="/">Close</Link>

          <div className="search-books-input-wrapper">
            {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                 */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>

        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {/* Loop through array <searchedBooks> and
                  - set default shelf to none
                  - if searched book already exists on <Shelves> (the id's match) --> change shelf from default value to the same shelf as on <Shelves>
                  - display the element}*/}
            {
              this.state.searchedBooks.map(searchedBook => {
                // Variable used for setting default shelf to none (if the book doesn't exist on <Shelves>)
                let shelf = "none";

                this.props.books.map(book => (
                  book.id === searchedBook.id ?
                    shelf = book.shelf :
                    ''
                ));

                // Display the book
                return (
                  <li key={searchedBook.id}>
                    <Book
                      book={searchedBook}
                      updateShelf={this.props.updateShelf}
                      currentShelf={shelf}
                    />
                  </li>
                )
              })
            }
          </ol>

        </div>
      </div>
    );
  }
}

export default Search;
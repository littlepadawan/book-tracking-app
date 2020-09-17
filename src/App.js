import React from 'react'
import { Route } from 'react-router-dom';
import Search from './Search';
import Shelves from './Shelves';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // componentDidMount() will be called by React when the component is created. The component renders and after that it fetches the books, puts them in books[] and updates the state
  componentDidMount() {
    //TODO: Declare this method in another method, so you can call the new method --> more dry code (ex in updateShelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Update the book's shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    //Change state and update the page
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Shelves
            updateShelf={this.updateShelf}
            books={this.state.books}
          />
        )} />

        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp

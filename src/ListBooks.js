import React from 'react'
import { Link } from 'react-router-dom'
import { BookShelf } from './BookShelf'

export class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={this.props.books}
            changeShelf={this.changeShelf}
            title="Currently Reading"
            shelf="currentlyReading"
          />
          <BookShelf
            books={this.props.books}
            changeShelf={this.changeShelf}
            title="Want to Read"
            shelf="wantToRead"
          />
          <BookShelf
            books={this.props.books}
            changeShelf={this.changeShelf}
            title="Read"
            shelf="read"
          />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>)
  }
};

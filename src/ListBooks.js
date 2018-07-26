import React from 'react'
import { Link } from 'react-router-dom'
import { BookShelf } from './BookShelf'

// transformed into functional stateless component
export const ListBooks = (props) => {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={props.books}
            changeShelf={props.changeShelf}
            title="Currently Reading"
            shelf="currentlyReading"
          />
          <BookShelf
            books={props.books}
            changeShelf={props.changeShelf}
            title="Want to Read"
            shelf="wantToRead"
          />
          <BookShelf
            books={props.books}
            changeShelf={props.changeShelf}
            title="Read"
            shelf="read"
          />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>)
  }

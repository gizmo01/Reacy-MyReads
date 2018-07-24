import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import {Book } from './Book'

export class SearchBooks extends React.Component {
  state = {
    query: '',
    searchedBooks : []
  }

  updateQuery = (query) => {
    this.setState({
      query : query,
     })
    this.getBooksSearched(query)
    }

  getBooksSearched = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if(searchedBooks.error) {
          this.setState({searchedBooks : [] })
        } else {
          this.setState({searchedBooks})
        }
      })
    } else {
      this.setState({searchedBooks : []})
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event)=> this.updateQuery(event.target.value)}
            />
          </div>
        </div><br/><br/><br/><br/>
        <div className="search-boo ks-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook =>
              {
                let currentShelf = "none"
                this.props.books.map(book =>(
                  book.id === searchedBook.id ?
                  currentShelf = book.shelf :
                  ""
                ))

                return (<li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={currentShelf}/>
                </li>)
              }
            )}
            </ol>
        </div>
      </div>)
  }

};

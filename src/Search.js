import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

export class Search extends React.Component {
  state = {
    query: '',
    searchedBooks : []
  }

  updateQuery = (query) => {
    this.setState({
      query : query,
     })
    console.log(BooksAPI.search(query, 20));
  }

getAll(){
  return this.state.searchedBooks
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
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{this.state.searchedBooks}</ol>
        </div>
      </div>)
  }

};

import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { ListBooks } from './ListBooks'
import { SearchBooks } from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
      books:[]
    }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      console.log(books);
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.componentDidMount()
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={()=>
          <SearchBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
          />}/>
        <Route exact path="/" render={()=>
          <ListBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
          />} />
      </div>)
  }
}

export default BooksApp

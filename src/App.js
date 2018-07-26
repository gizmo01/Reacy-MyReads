import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'
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
    })
  }

//new books are added to the existing books.state through concat() method
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
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
        </Switch>
      </div>)
  }
}

export default BooksApp

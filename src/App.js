import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import './App.css'
import {ListBook} from './ListBook.js'
import {Search} from './Search'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false
    }
    this.goToSearchPage = this.goToSearchPage.bind(this)
  }

  goToSearchPage() {
    this.setState({showSearchPage: true})
  }

  render() {
    return (<div className="app">
      {
        this.state.showSearchPage
          ? (<Search/>)
          : (<ListBook searchPage={this.goToSearchPage}/>)
      }
    </div>)
  }
}

export default BooksApp

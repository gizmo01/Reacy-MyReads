import React from 'react'
import { Book } from './Book'

 export class BookShelf extends React.Component {
   render(){
     return (
       <div className="bookshelf">
         <h2 className="bookshelf-title">{this.props.title}</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
             {this.props.books
               .filter(book => book.shelf === this.props.shelf)
               .map(book =>
                 <li key={book.id}>
                   <Book
                     book={book}
                     changeShelf={this.props.changeShelf}
                     currentShelf={book.shelf}/>
                 </li>)}
           </ol>
         </div>
       </div>
     )
   }
};

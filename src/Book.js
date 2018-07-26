import React from 'react'

 export class Book extends React.Component {
   render(){
     const {book} = this.props
     let hasThumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : ''
     return (
         <div className="book">
           <div className="book-top">
             <div className="book-cover" style={{
                 backgroundImage: `url(${hasThumbnail})`
             }}></div>
             <div className="book-shelf-changer">
               <select
                 onChange={(event) =>
                   this.props.changeShelf(book, event.target.value)
                 }
                 value={this.props.currentShelf}>
                 <option value="move" disabled="disabled">Move to...</option>
                 <option value="currentlyReading">Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
               </select>
             </div>
           </div>
           <div className="book-title">{book.title}</div>
           <div className="book-authors">
             {book.authors ? book.authors.join(' - ') : 'No author available'}</div>
         </div>
     );
   }

};

# MyReads Project
This is the 7th project required for the completion of  Google-Udacity Front End Web Development Nanodegree.

## Installation
Follow these steps to install the app on your local machine and to get it started:

* git clone https://github.com/gizmo01/React-MyReads
* Install all the required dependencies with `npm install`
* Install [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* Start the development server with `npm start`
  * This runs the app in the development mode.
  * Open http://localhost:3000 to view it in the browser.
  * The page will reload if you make edits.
  * You will also see any lint errors in the console.

## Using the app
The initial page shows 3 shelves of books (Currently Reading, Want To Read, Read). The user can change the status of a book on the shelf to one of the three types mentioned above or to none to remove it completely.
In the search page the user can type into the input form to search for books and add them to one of the three shelves or to move them to another shelf.

## Important
The backend API uses a fixed set of cached search results and is limited to this particular set of search terms:

> ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

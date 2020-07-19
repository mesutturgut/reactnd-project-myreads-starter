import React from 'react';
import Book from './Book';

const Library = props => {
  const { 
          shelf, 
          books, 
          onMove 
        } = props;
  const booksOnLibrary = books.filter(
                                        book => 
                                        book.shelf === shelf.key
                                    );
   
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
          {shelf.name}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            booksOnLibrary.map(
                        book => (
                                  <Book 
                                    key={book.id}
                                    book={book} 
                                    shelf={shelf.key} 
                                    onMove={onMove} >
                                  </Book>
          ))}
        </ol>
      </div>
    </div>
  );
  
};

export default Library;

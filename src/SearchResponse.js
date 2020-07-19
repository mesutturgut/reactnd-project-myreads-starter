import React from 'react';
import Book from './Book';

const SearchResponse = props => 
{
  const 
  { 
    searching, 
    myBooks, 
    onMove 
  } = props;

  const updatedBooks = searching.map(book => 
  {
    myBooks.map(x => 
    {
      if (x.id === book.id) 
      {
        book.shelf = x.shelf;
      }
      return x;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {
          updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onMove={onMove}
          />
          ))
        }
      </ol>
    </div>
  );
};

export default SearchResponse;

import { Link } from 'react-router-dom';
import SearchBooksEnrty from "./SearchBooksEnrty";
import React, { Component } from 'react';
import SearchResponse from './SearchResponse';


class Searched extends Component
 {
  render() {
    const {
      searching,
      myBooks,
      onSearch,
      onResetSearch,
      onMove
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <SearchBooksEnrty onSearch={onSearch} >            
          </SearchBooksEnrty>
        </div>
        <SearchResponse
          searching={searching}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default Searched;

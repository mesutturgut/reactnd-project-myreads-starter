# MyReads Project

MyReads is a simple cataloging app that allows you to place books in one of three shelves or categories.

- Currently Reading
- Want to Read
- Read

It also allow you to search for books based on title and author.

This app is the first of three projects required for [Udacity's React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

You can read a detailed walk-through of how this app was constructed in  [MyReads Code Notes](https://github.com/mesutturgut/reactnd-project-myreads-starter).

## Installation

Clone the repository, change directories, and use NPM to install the dependencies.

```bash
$ git clone https://github.com/mesutturgut/reactnd-project-myreads-starter.git
$ cd reactnd-project-myreads-starter
$ npm install
```
## Usage
The project can be run with

- `npm start`

The project can be viewed in the browser at

- [http://localhost:3000](http://localhost:3000)

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── icons # React Icons.
│   │   ├── add.svg # icon
│   │   ├── arrow-back.svg # icon
│   │   ├── arrow-drop-down.svg # icon
│   │   ├── book-palaxeholder.svg # icon
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # evert book elements seems front
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below. 
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Library.js # filter all books with key
    ├── Listed.js # .book list
    ├── SearchBookEntry.js # can be search book 
    ├── Searched.js # .searched books
    ├── SearchResponse.js # . search result
    └── ShelfUpdater.js # can be change shelf selected book  
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

 

## Screenshots
![screenshot1](https://github.com/mesutturgut/reactnd-project-myreads-starter/blob/master/src/docs/myreads.JPG)

![screenshot2](https://github.com/mesutturgut/reactnd-project-myreads-starter/blob/master/src/docs/wanttoread.JPG)

![screenshot3](https://github.com/mesutturgut/reactnd-project-myreads-starter/blob/master/src/docs/moveTo.JPG)

![screenshot4](https://github.com/mesutturgut/reactnd-project-myreads-starter/blob/master/src/docs/search.JPG)

 
function createLibrary(libraryName) {
  var libraryObject = {
    name: libraryName,
    shelves: shelvesObject()
  }
  return libraryObject
}

function shelvesObject() {
  var shelvesObject = {
    fantasy: [],
    fiction: [],
    nonFiction: []
  }
  return shelvesObject
}

function addBook(library, book) {
  if (book.genre == "fantasy") {
    library.shelves.fantasy.push(book)
  } else if (book.genre == "fiction") {
    library.shelves.fiction.push(book)
  } else {
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, bookTitle) {
  var bookToCheckout = []

  library.shelves.fantasy.forEach(function(book) { 
    if (book.title == bookTitle) {
      bookToCheckout.push(book)
      var removedFantasyBooks = library.shelves.fantasy.filter(book => book.title != bookTitle)
      library.shelves.fantasy = removedFantasyBooks
    }
  })

  library.shelves.fiction.forEach(function(book) { 
    if (book.title == bookTitle) {
      bookToCheckout.push(book)
      var removedFictionBooks = library.shelves.fiction.filter(book => book.title != bookTitle)
      library.shelves.fiction = removedFictionBooks
    }
  })

  library.shelves.nonFiction.forEach(function(book) { 
    if (book.title == bookTitle) {
      bookToCheckout.push(book)
      var removedNonFictionBooks = library.shelves.nonFiction.filter(book => book.title != bookTitle)
      library.shelves.fiction = removedNonFictionBooks
    }
  })

  if (bookToCheckout.length == 0) {
    return "Sorry, there are currently no copies of " + bookTitle + " available at the " + library.name
  } else {
    var titleOfBookToCheckout = bookToCheckout[0].title
    return "You have now checked out " + titleOfBookToCheckout + " from the " + library.name
  }
}

module.exports = {
  createLibrary: createLibrary,
  shelvesObject: shelvesObject,
  addBook: addBook,
  checkoutBook: checkoutBook
};
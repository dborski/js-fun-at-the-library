function shelfBook(book, shelf) {
  if (shelf.length >= 3) {
    return shelf
  } else {
    return shelf.unshift(book)
  }
}

function unshelfBook(bookSeeking, shelf) {
  var bookIndex = shelf.findIndex(book => book.title == bookSeeking)
  shelf.splice(bookIndex, 1)
}

function listTitles(shelf) {
  var allTitles = shelf.flatMap(book => book.title)
  return allTitles.join(", ")
}

function searchShelf(shelf, bookTitle) {
  return listTitles(shelf).includes(bookTitle)
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
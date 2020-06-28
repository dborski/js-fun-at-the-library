function createTitle(title) {
  return "The " + title
}

function buildMainCharacter(name, age, pronouns) {
  var goulObject = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return goulObject
}

function saveReview(reviewText, reviews) {
  if (reviews.includes(reviewText)) {
    return reviews
  } else {
    return reviews.push(reviewText)
  }
}

function calculatePageCount(bookTitle) {
  var characters = bookTitle.length
  return characters * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  var bookObject = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return bookObject
}

function editBook(book) {
  var newPageCount = book.pageCount * 0.75
  book.pageCount = newPageCount
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
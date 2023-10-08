const myLibrary = [];

// constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// constructor method
Book.prototype.info = function() {
  return (this.read) ? 
    `${this.title} by ${this.author}, ${this.pages} pages, have read` :
    `${this.title} by ${this.author}, ${this.pages} pages, not read yet` ;
}
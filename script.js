const myLibrary = [{
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 295,
    read: false
  }, {
    title: 'Moby Dick',
    author: 'Herman Melville',
    pages: 752,
    read: true
  }
];

showBooks();

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


function showBooks() {
  let booksHTML = '';

  myLibrary.forEach(book => {
    booksHTML += `
      <div class="book-card">
        <div class="column-item">${book.title}</div>
        <div class="column-item">${book.author}</div>
        <div class="column-item">${book.pages}</div>
        <div class="column-item">${book.read}</div>
      </div>
    `;
  });

  document.querySelector('.books')
    .innerHTML = booksHTML;
}
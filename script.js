const myLibrary = [];
showBooks();

const dialog = document.querySelector('#add-book-modal');
const showDialogBtn = document.querySelector('.show-modal-button');
const addBookBtn = document.querySelector('#add-book-button');

// form inputs
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const bookRead = document.querySelector('#book-read');

showDialogBtn.addEventListener('click', () => {
  dialog.showModal();
});

addBookBtn.addEventListener('click', e => {
  addBook(e);
});

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

// functions
function showBooks() {
  let booksHTML = '';

  myLibrary.forEach((book, index) => {
    booksHTML += `
      <div class="book-card">
        <div class="column-item">${book.title}</div>
        <div class="column-item">${book.author}</div>
        <div class="column-item">${book.pages}</div>
        <div class="column-item">${book.read}</div>
        <div class="remove-container">
            <button data-book-index="${index}" class="remove-book-button">X</button>
        </div>
      </div>
    `;
  });

  document.querySelector('.books')
    .innerHTML = booksHTML;

  document.querySelectorAll('.remove-book-button')
  .forEach(removeBtn => {
    removeBtn.addEventListener('click', () => {
      const { bookIndex } = removeBtn.dataset;
      removeBook(bookIndex);
      showBooks();
    });
  });
}

function addBook(e) {
  e.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const read = bookRead.checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  showBooks();
  dialog.close();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
}
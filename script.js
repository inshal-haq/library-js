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
  showBooks();
});

// constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// constructor method
Book.prototype.toggleRead = function() {
  this.read = !this.read
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
        <div class="button-container">
          <button data-book-index="${index}" class="read-button">${book.read}</button>
        </div>
        <div class="button-container">
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

  document.querySelectorAll('.read-button')
    .forEach(readBtn => {
      readBtn.addEventListener('click', () => {
        const { bookIndex } = readBtn.dataset;
        myLibrary[bookIndex].toggleRead();
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
  dialog.close();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
}
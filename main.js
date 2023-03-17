// function that loops through the array and displays each book on the page
// Can display then in some sort of table or each on their own "card"

// Add button on each book display to remove the book from the library
// You will need to associate your DOM elements with the actual book objects in some way. 
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status
// To facilitate this you will want to create the function that toggles
// a book’s read status on your Book prototype instance.
const formCard = document.querySelector('.card');
const bookForm = document.querySelector('#form');
const newBook = document.querySelector('.new-book');
const overLay = document.querySelector('.over-lay');
const closeButton = document.querySelector('.close');
const bookShelf = document.querySelector('.book-shelf');
let books = JSON.parse(localStorage.getItem('books')) || [];
let formOpen = false;

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

// Create "NEW BOOK" button. Display a book form, author, title, pages, read or not.
function formOpenOrClosed() {
    if (formOpen) {
        formCard.style.transform = 'scale(0)';
        newBook.style.transform = 'rotate(0)';
        bookForm.reset();
        overLay.style.opacity = 0;
        formOpen =false;
    } else {
        formCard.style.transform = 'scale(1)';
        newBook.style.transform = 'rotate(720deg)';
        overLay.style.opacity = 1;
        formOpen = true;
    }
}

// close modal
function closeModal() {
    formCard.style.transform = 'scale(0)';
    overLay.style.opacity = '0';
    newBook.style.transform = 'rotate(0)';
    bookForm.reset();
    formOpen = false;
}

// use event.preventDefault(). Read event.preventDefault documentation
function addBookToLibrary(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=title')).value;
    const item = {
        text,
    }
    let bookAdd = document.createElement('div');
    bookAdd.classList.add('book');
    bookAdd.setAttribute('data-index', `${e}`);
    
    const title = document.getElementById('title').value;
    let userTitle = document.createElement('h2');
    userTitle.textContent = `Title: ${title}`;

    const author = document.getElementById('author').value;
    let userAuthor = document.createElement('h3');
    userAuthor.textContent = `Author: ${author}`;

    const pages = document.getElementById('pages').value;
    let userPages = document.createElement('h3');
    userPages.textContent = `Pages: ${pages}`;

    const read = document.getElementById('read').value;
    let userRead = document.createElement('h3');
    userRead.textContent = `Read: ${read === 'Yes' ? '👍' : '👎'}`;

    let updateButton = document.createElement('button');
    updateButton.classList = 'update';
    updateButton.textContent = `Update <i class="bi bi-pencil"></i>`;

    let deleteButon = document.createElement('button');
    deleteButon.classList = 'bin';
    deleteButon.textContent = `Delete <i class="bi bi-trash3"></i>`;
    console.log('hello');
}

// const book = new Book(title, author, pages, read);
// books.push(books);

// event listeners
bookForm.addEventListener('submit', addBookToLibrary, closeModal); 
newBook.addEventListener('click', formOpenOrClosed);
closeButton.addEventListener('click', closeModal);

// form validation
const bookTitle = document.querySelector('#title');
const titleError = document.querySelector('.title-error'); 
bookTitle.addEventListener('input', (e) => {
    bookTitle.value === '' ? titleError.textContent = '* Please enter a book title' : titleError.textContent = '';
})

const bookAuthor = document.querySelector('#author');
const authorError = document.querySelector('.author-error');
bookAuthor.addEventListener('input', (e) => {
    bookAuthor.value === '' ? authorError.textContent = '* Please enter an authors name' : authorError.textContent = '';
})

// dark mode
const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');
const header = document.querySelector('header');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'var(--light-bg)';
        body.style.color = 'black';
        body.style.transition = '0.1s';
        formCard.style.background = 'var(--light-bg)';
        header.style.background = 'var(--header-dodger-blue)';
    } else {
        body.style.background = 'var(--dark1-bg)';
        body.style.color = 'white';
        body.style.transition = '0.1s';
        formCard.style.background = 'var(--dark2-bg)';
        header.style.background = 'var(--dark2-bg)';
    }
})

// Create "NEW BOOK" button that displays a form for users to input
// details for a book, author, title, number pages, read or not.
const formCard = document.querySelector('.card');
const form = document.querySelector('#form');
const newBook = document.querySelector('#new-book');
const overHang = document.querySelector('.over-hang');
const closeButton = document.querySelector('.close');
const bookShelf = document.querySelector('.book-shelf');
let books = JSON.parse(localStorage.getItem('books')) || [];

const author = document.querySelector('#author');
const authorError = document.querySelector('.author-error');
const pages = document.querySelector('#pages');
const pagesError = document.querySelector('.pages-error');
// function that loops through the array and displays each book on the page
// Can display then in some sort of table or each on their own "card"
let formOpen;
let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

function addBookToLibrary(i) {
    let bookNode = document.createElement('div');
    bookNode.classList.add('book');
    bookNode.setAttribute('data-index', `${i}`)
}

// const book = new Book(title, author, pages, read);
// books.push(book);
// localStorage.setItem('books', JSON.stringify(books));
// bookNode.appendChild(titleNode);

function formOpenOrClosed() {
    if (formOpen) {
        formCard.style.transform = 'scale(0)';
        newBook.style.transform = 'rotate(0)';
        form.reset();
        overHang.style.opacity = 0;
        formOpen =false;
    } else {
        formCard.style.transform = 'scale(1)';
        newBook.style.transform = 'rotate(720deg)';
        overHang.style.opacity = 1;
        formOpen = true;
    }
}

// close modal
function closeModal() {
    formCard.style.transform = 'scale(0)';
    overHang.style.opacity = '0';
    newBook.style.transform = 'rotate(0)';
    form.reset();
    formOpen = false;
}

// event listeners
newBook.addEventListener('click', formOpenOrClosed);
closeButton.addEventListener('click', closeModal);

// validation
const title = document.querySelector('#title');
const titleError = document.querySelector('.title-error'); 

title.addEventListener('input', (e) => {
    if(title.value === '') {
        titleError.textContent = '* Please enter a book title';
    } else {
        titleError.textContent = '';

    }
})
// use event.preventDefault(). Read event.preventDefault documentation

// Add a button on each book’s display to remove the book from the library
// You will need to associate your DOM elements with the actual book objects in some way. 
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'var(--light-bg)';
        body.style.color = 'black';
        body.style.transition = '0.1s';
        formCard.style.background = 'var(--light-bg)';
    } else {
        body.style.background = 'var(--dark1-bg)';
        body.style.color = 'white';
        body.style.transition = '0.1s';
        formCard.style.background = 'var(--dark2-bg)';
    }
})
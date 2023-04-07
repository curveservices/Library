// global variables
let myLibrary = [];
let formOpen;
const formCard = document.querySelector('.card');
const bookForm = document.querySelector('#form');
const newBook = document.querySelector('.new-book');
const overLay = document.querySelector('.over-lay');
const closeButton = document.querySelector('.close');
const bookShelf = document.querySelector('.book-shelf');

// define book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read;
    }
    toggleReadStatus() {
        this.read = !this.read;
    }
}

// define functions
function displayBooks() {
    bookShelf.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        const card = document.createElement('div');
        card.classList.add('book');

        const title = document.createElement('h2');
        title.classList.add('book-title');
        title.textContent = `${book.title}`;
        card.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `by: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;
        card.appendChild(pages);
        
        const read = document.createElement('p');
        read.textContent = `${book.read === "Yes" ? "Read 👍" : "Not Read 👎"}`;
        card.appendChild(read);
        
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('update');
        toggleButton.innerHTML = 'Update <i class="bi bi-pen"></i>';
        toggleButton.addEventListener('click', () => {
            book.toggleReadStatus();
            read.textContent = book.read ? 'Read 👍' : 'Not Read 👎';
        });
        card.appendChild(toggleButton);

        const removeButton = document.createElement('button');
        removeButton.classList.add('delete');
        removeButton.innerHTML = 'Remove Book <i class="bi bi-trash"></i>';
        removeButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
        card.appendChild(removeButton);

        card.dataset.index = i;
        bookShelf.appendChild(card);
    }
};

function addBookToLibrary(title, author,pages,read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// use event.preventDefault(). Read event.preventDefault documentation
function populateBooks(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pages.value;
    const read = event.target.read.value;
    addBookToLibrary(title, author, pages, read);
    formOpenOrClosed();
    displayBooks();
}

bookForm.addEventListener('submit', populateBooks); 

// Create "NEW BOOK" button. Display a form, author, title, pages, read or not.
newBook.addEventListener('click', formOpenOrClosed);
closeButton.addEventListener('click', formOpenOrClosed);
function formOpenOrClosed() {
    if (formOpen) {
        formCard.style.transform = 'scale(0)';
        newBook.style.transform = 'rotate(0)';
        bookForm.reset();
        overLay.style.opacity = 0;
        formOpen =false;
    } else {
        formCard.style.transform = 'scale(1)';
        newBook.style.transform = 'rotate(900deg)';
        overLay.style.opacity = 1;
        formOpen = true;
    }
};

// form validation
const bookTitle = document.getElementById('title');
const titleError = document.querySelector('.title-error'); 
bookTitle.addEventListener('input', () => {
    bookTitle.value === '' ? titleError.textContent = '* Please enter a book title' : titleError.textContent = '';
});

const bookAuthor = document.getElementById('author');
const authorError = document.querySelector('.author-error');
bookAuthor.addEventListener('input', () => {
    bookAuthor.value === '' ? authorError.textContent = '* Please enter an authors name' : authorError.textContent = '';
});

const bookPages = document.getElementById('pages');
const pagesError = document.querySelector('.pages-error');
bookPages.addEventListener('input', () => {
    bookPages.value === '' ? pagesError.textContent = '* Please enter amount of pages' : pagesError.textContent= '';
})

// dark mode
const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');
const header = document.querySelector('header');
const bookCard = document.querySelector('.book');

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
});

// Create "NEW BOOK" button that displays a form for users to input
// details for a book, author, title, number pages, read or not.

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

function addBookToLibrary() {

}

const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'var(--light-bg)';
        body.style.color = 'black';
        body.style.transition = '1s';
    } else {
        body.style.background = 'var(--dark1-bg)';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
})
// function that loops through the array and displays each book on the page
// Can display then in some sort of table or each on their own "card"



// use event.preventDefault(). Read event.preventDefault documentation

// Add a button on each book’s display to remove the book from the library
// You will need to associate your DOM elements with the actual book objects in some way. 
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// OPEN AND CLOSE DIALOG //
const dialog = document.querySelector("dialog");
const openDialogBtn = document.querySelector(".add-book");
const closeDialogBtn = document.querySelector(".close");

openDialogBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeDialogBtn.addEventListener("click", () => {
    dialog.close();
})


class Book {
    constructor(title, author, pages, reading) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.reading = reading;
    }
}

class Library {
    constructor() {
        this.library = [];
    }

    length() { 
        return this.library.length;
    }

    addToLibrary(addThisBookToLibrary) {
        this.library.push(addThisBookToLibrary);
    }

    getReading(index) {
        return this.library[index].reading; 
    }

    setReading(index, status) {
        this.library[index].reading = status;
    }

    deleteBook(index) {
        this.library.splice(index, 1);
    }

}

let userLibrary = new Library();

const addBookBtn = document.querySelector("dialog footer button");

addBookBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const reading = document.querySelector("#reading");

    addBook(title.value, author.value, pages.value, reading.checked ? true : false);
    dialog.close();
    clearValues(title, author, pages, reading);
});

addBook("The Hobbit", "J.R.R Tolkien", 297, true);


// GENERAL FUNCTIONS

function clearValues(...args) {
    args.forEach(element => {
        element.value = "";
        if (element.checked) {
            element.checked = false;
        }
    });
}

function addBook(title, author, pages, reading) {
    const bookList = document.querySelector(".book-list")
    const card = document.createElement("div");
    card.classList.add("card");
    const bookCardContent = document.createElement("div");
    bookCardContent.classList.add("book-card-content");
    const header = document.createElement("header");
    header.textContent = title;
    const index = document.createElement("span");
    index.textContent = userLibrary.length();
    const authorDiv = document.createElement("div");
    authorDiv.textContent = author;
    const pagesDiv = document.createElement("div")
    pagesDiv.textContent = pages;
   
    const readingStatus = document.createElement("div")
    if (reading === true) {
        readingStatus.textContent = "Reading";
    } else {
        readingStatus.textContent = "Not Reading";
    }
    
    const button = document.createElement("button");
    button.textContent = "Toggle Reading";
    button.classList.add("toggle-btn");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const btn = event.target
        const index = btn.parentNode.firstChild.lastChild.textContent;
        const readingDiv = btn.previousSibling;
        if (userLibrary.getReading(index) === false) {
            userLibrary.setReading(index, true);
            readingDiv.textContent = "Reading";
        } else {
            userLibrary.setReading(index, false);
            readingDiv.textContent = "Not Reading";
        }
    })


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const btn = event.target
        const card = btn.parentNode.parentNode;
        const index = btn.parentNode.firstChild.lastChild.textContent;
        userLibrary.deleteBook(index);
        card.remove()
    })


    card.appendChild(bookCardContent);
    header.appendChild(index);
    bookCardContent.appendChild(header);
    bookCardContent.appendChild(authorDiv);
    bookCardContent.appendChild(pagesDiv);
    bookCardContent.appendChild(readingStatus);
    bookCardContent.appendChild(button);
    bookCardContent.appendChild(deleteBtn);
    bookList.appendChild(card);
    
    userLibrary.addToLibrary(new Book(title, author, pages, reading ? true : false));
}
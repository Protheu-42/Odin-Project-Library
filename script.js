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

// DATA CAPTURING AND DISPLAY//
function Book(title, author, pages, reading) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.reading = reading;
}

let library = [];

const addBookBtn = document.querySelector("dialog footer button");

addBookBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const reading = document.querySelector("#reading");

    addBook(title.value, author.value, pages.value, reading.checked ? true : false);
});

addBook("The Hobbit", "J.R.R Tolkien", 297, true);


// CHANGE AND REMOVE DATA INTERACTION
const toggleReadingBtn = document.querySelectorAll(".book-card-content .toggle-btn");
toggleReadingBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        const index = btn.parentNode.firstChild.lastChild.textContent;
        const readingDiv = btn.previousSibling;
        if (!library[index].reading) {
            library[index].reading = true;
            readingDiv = "Not Reading"
        } else {
            library[index].reading = false;
        }
        
    })    
});


// GENERAL FUNCTIONS

function addBook(title, author, pages, reading) {
    const bookList = document.querySelector(".book-list")
    const card = document.createElement("div");
    card.classList.add("card");
    const bookCardContent = document.createElement("div");
    bookCardContent.classList.add("book-card-content");
    const header = document.createElement("header");
    header.textContent = title;
    const index = document.createElement("span");
    index.textContent = library.length;
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
    button.classList.add("toggle-btn")

    card.appendChild(bookCardContent);
    header.appendChild(index);
    bookCardContent.appendChild(header);
    bookCardContent.appendChild(authorDiv);
    bookCardContent.appendChild(pagesDiv);
    bookCardContent.appendChild(readingStatus);
    bookCardContent.appendChild(button);
    bookList.appendChild(card);
    
    library.push(new Book(title, author, pages, reading ? true : false));
}


// function addBook(book) {
//     const bookList = document.querySelector(".book-list")
//     const card = document.createElement("div");
//         card.classList.add("card");
//         const bookCardContent = document.createElement("div");
//         bookCardContent.classList.add("book-card-content");
//         const header = document.createElement("header");
//         header.textContent = book.title;
//         const index = document.createElement("span");
//         index.textContent = library.length - 1;
//         const author = document.createElement("div");
//         author.textContent = book.author;
//         const pages = document.createElement("div")
//         pages.textContent = book.pages;
//         const readingStatus = document.createElement("div")
//         if (book.reading === true) {
//             readingStatus.textContent = "Reading";
//         } else {
//             readingStatus.textContent = "Not Reading";
//         }
//         const button = document.createElement("button");
//         button.textContent = "Toggle Reading";

//         card.appendChild(bookCardContent);
//         header.appendChild(index);
//         bookCardContent.appendChild(header);
//         bookCardContent.appendChild(author);
//         bookCardContent.appendChild(pages);
//         bookCardContent.appendChild(readingStatus);
//         bookCardContent.appendChild(button);
//         bookList.appendChild(card);
// }
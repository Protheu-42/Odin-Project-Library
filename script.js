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

// document.addEventListener("DOMContentLoaded", function () {
//     dialog.showModal();
// }, false);


// DATA CAPTURING //
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

    library.push(new Book(title.value, author.value, pages.value, reading.checked ? true : false));
});

library.push(new Book("The Hobbit", "J.R.R Tolkien", 297, true));
const myLibrary = [];

class Book{
  #title;
  #author;
  #pages;
  #read;
  constructor(title, author, pages, read){
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
    this.#read = read;
  }

  get title(){
    return this.#title;
  }

  get author(){
    return this.#author;
  }

  get pages(){
    return this.#pages;
  }

  get read(){
    return this.#read;
  }

  set read(read){
    this.#read = read;
  }
}

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     let log = `${this.title} by ${this.author}, ${this.pages} pages, `;
//     this.read ? (log += `has been read.`) : (log += `not read yet.`);
//     return log;
//   };
// }

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(myLibrary) {
  let booklist = document.querySelector("#booklist");
  booklist.innerHTML = "";
  for (let i in myLibrary) {
    let book = myLibrary[i];
    let readtext = book.read ? `Yes` : `No`;
    booklist.innerHTML += `<div class="bookcard">
            <h4><bold>Title: </bold></h4><p>${book.title}</p>
            <h4><bold>Author: </bold></h4><p>${book.author}</p>
            <h4><bold>Pages: </bold></h4><p>${book.pages}</p>
            <h4><bold>Read: </bold></h4><p>${readtext}</p>
            <button class="removeButton" id="${i}">Remove Book</button>
            <button class="markButton" id="${i}">Mark Read/Unread</button>
        </div>`;
    // console.log(book.info())
  }
}

book = new Book("lotr", "jrr tolkien", 295, true);
addBookToLibrary(book);
book = new Book("the trial", "franz kafka", 190, false);
addBookToLibrary(book);

function init() {
  displayBooks(myLibrary);
  let removeBookButtons = document.querySelectorAll(".removeButton");
  let markBookButtons = document.querySelectorAll(".markButton");

  for (let btn of removeBookButtons) {
    btn.addEventListener("click", () => {
      processRemoveButton(btn);
    });
  }

  for (let btn of markBookButtons) {
    btn.addEventListener("click", () => {
      processMarkButton(btn);
    });
  }
}

let addBookDialog = document.querySelector("#addBookDialog");
let addBookDialogButton = document.querySelector("#addBookDialogButton");
let addBookAction = document.querySelector("#addBookAction");
let addBookCancel = document.querySelector("#addBookCancel");

addBookDialogButton.addEventListener("click", () => {
  document.getElementById("bookauthor").value = "";
  document.getElementById("booktitle").value = "";
  document.getElementById("bookpages").value = "";
  document.getElementById("bookread").value = false;
  addBookDialog.showModal();
});

addBookDialog.addEventListener("close", () => {
  //   openCheck(addBookDialog);
  handleUserInput(addBookDialog.returnValue);
});

// addBookAction.addEventListener("click",()=>{
//   let author = document.getElementById("bookauthor").value;
//   let title = document.getElementById("booktitle").value;
//   let pages = document.getElementById("bookpages").value;
//   let read = document.getElementById("bookread").value;
//   book = new Book(author, title, parseInt(pages), read == "true");
//   addBookToLibrary(book);
//   init();
// })

function handleUserInput(returnValue) {
  if (returnValue == "submitBook") {
    let author = document.getElementById("bookauthor").value;
    let title = document.getElementById("booktitle").value;
    let pages = document.getElementById("bookpages").value;
    let read = document.getElementById("bookread").value;
    let book = new Book(author, title, parseInt(pages), read == "true");
    addBookToLibrary(book);
    init();
  }
}

addBookCancel.addEventListener("click", () => {
  addBookDialog.close();
});

addBookAction.addEventListener("click", (e) => {
  e.preventDefault();
  addBookDialog.close("submitBook");
});

function processRemoveButton(btn) {
  let id = btn.getAttribute("id");
  myLibrary.splice(parseInt(id), 1);
  init();
}

function processMarkButton(btn) {
  let id = btn.getAttribute("id");
  myLibrary[id].read = !myLibrary[id].read;
  init();
}

init();

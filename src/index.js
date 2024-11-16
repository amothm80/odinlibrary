import "./styles.css";
import { Book, Library, loadLibrary } from "./book.js";
import { eventHandler } from "./eventHandler.js";

// addBookDialog.addEventListener("close", () => {
//   //   openCheck(addBookDialog);
//   handleUserInput(addBookDialog.returnValue);
// });

// // addBookAction.addEventListener("click",()=>{
// //   let author = document.getElementById("bookauthor").value;
// //   let title = document.getElementById("booktitle").value;
// //   let pages = document.getElementById("bookpages").value;
// //   let read = document.getElementById("bookread").value;
// //   book = new Book(author, title, parseInt(pages), read == "true");
// //   addBookToLibrary(book);
// //   init();
// // })

// function handleUserInput(returnValue) {
//   if (returnValue == "submitBook") {
//     let author = document.getElementById("bookauthor").value;
//     let title = document.getElementById("booktitle").value;
//     let pages = document.getElementById("bookpages").value;
//     let read = document.getElementById("bookread").value;
//     let book = new Book(author, title, parseInt(pages), read == "true");
//     addBookToLibrary(book);
//     init();
//   }
// }

// addBookCancel.addEventListener("click", () => {
//   addBookDialog.close();
// });

// addBookAction.addEventListener("click", (e) => {
//   e.preventDefault();
//   addBookDialog.close("submitBook");
// });

// function processRemoveButton(btn) {
//   let id = btn.getAttribute("id");
//   myLibrary.splice(parseInt(id), 1);
//   init();
// }

// function processMarkButton(btn) {
//   let id = btn.getAttribute("id");
//   myLibrary[id].read = !myLibrary[id].read;
//   init();
// }
export function displayBooks(library) {
  const booklist = document.getElementById("booklist");
  booklist.innerHTML = "";

  library.getLibrary().forEach((book, index) => {
    const bookcard = document.createElement("div");
    bookcard.className = "bookcard";

    const bookcardBody = document.createElement("div");
    bookcardBody.className = "bookcard-body";

    const bookcardControls = document.createElement("div");
    bookcardControls.className = 'bookcard-controls'

    const titleLabel = document.createElement("p");
    const authorLabel = document.createElement("p");
    const pagesLabel = document.createElement("p");
    const readLabel = document.createElement("p");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    titleLabel.innerHTML = `<bold>Title: </bold>`;
    title.innerHTML = `${book.getBook().title}`;
    authorLabel.innerHTML = `<bold>Author: </bold>`;
    author.innerHTML = `${book.getBook().author}`;
    pagesLabel.innerHTML = `<bold>Pages: </bold>`;
    pages.innerHTML = `${book.getBook().pages}`;
    readLabel.innerHTML = `<bold>Read: </bold>`;
      read.innerHTML = `${book.getBook().read ? "Yes" : "No" }</p>`;

    const removeButton = document.createElement("button");
    removeButton.id = "remove-button";
    removeButton.dataset.index = index;
    removeButton.innerHTML = "Remove Book";

    const markButton = document.createElement("button");
    markButton.id = "mark-button";
    markButton.dataset.index = index;
    markButton.innerHTML = "Mark Read/Unread";

    bookcardBody.appendChild(titleLabel);
    bookcardBody.appendChild(title);
    bookcardBody.appendChild(authorLabel);
    bookcardBody.appendChild(author);
    bookcardBody.appendChild(pagesLabel);
    bookcardBody.appendChild(pages);
    bookcardBody.appendChild(readLabel);
    bookcardBody.appendChild(read);
    bookcardControls.appendChild(removeButton);
    bookcardControls.appendChild(markButton);

    bookcard.appendChild(bookcardBody);
    bookcard.appendChild(bookcardControls);

    booklist.appendChild(bookcard)
  });
}

(() => {
  const library = Library();

  const savedLibrary = loadLibrary();

  if (savedLibrary) {
    savedLibrary.forEach((book) => {
      library.addBookToLibrary(
        Book(book.title, book.author, book.pages, book.read)
      );
    });
  }

  eventHandler(library);

  // library.addBookToLibrary(Book("lotr", "jrr tolkien", 295));
  // library.addBookToLibrary(Book("the trial", "franz kafka", 190));

  displayBooks(library);
  // let removeBookButtons = document.querySelectorAll(".removeButton");
  // let markBookButtons = document.querySelectorAll(".markButton");

  // for (let btn of removeBookButtons) {
  //   btn.addEventListener("click", () => {
  //     processRemoveButton(btn);
  //   });
  // }

  // for (let btn of markBookButtons) {
  //   btn.addEventListener("click", () => {
  //     processMarkButton(btn);
  //   });
  // }
})();

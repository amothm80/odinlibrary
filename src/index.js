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

    const title = document.createElement("h4");
    const author = document.createElement("h4");
    const pages = document.createElement("h4");
    const read = document.createElement("h4");
    title.innerHTML = `<bold>Title: </bold><p>${book.getBook().title}</p>`;
    author.innerHTML = `<bold>Author: </bold><p>${book.getBook().author}</p>`;
    pages.innerHTML = `<bold>Pages: </bold><p>${book.getBook().pages}</p>`;
    read.innerHTML = `<bold>Read: </bold><p>${
      book.getBook().read ? "Yes" : "No"
    }</p>`;


    const removeButton = document.createElement("button");
    removeButton.id = "remove-button";
    removeButton.dataset.index = index;
    removeButton.innerHTML = "Remove Button";

    const markButton = document.createElement("button");
    markButton.id = "mark-button";
    markButton.dataset.index = index;
    markButton.innerHTML = "Mark Button";

    bookcard.appendChild(title);
    bookcard.appendChild(author);
    bookcard.appendChild(pages);
    bookcard.appendChild(read);
    bookcard.appendChild(removeButton);
    bookcard.appendChild(markButton);

    booklist.appendChild(bookcard);

  });

}

(() => {
  const library = Library();

  const savedLibrary = loadLibrary();

  if (savedLibrary) {
    savedLibrary.forEach((book) => {
      library.addBookToLibrary(Book(book.title, book.author, book.pages, book.read));
    });
  }

  eventHandler(library)

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

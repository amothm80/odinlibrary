import { saveLibary, Book } from "./book.js";
import { displayBooks } from "./index.js";

function addBookDialog() {
  const addBookDialog = document.getElementById("add-book-dialog");

  document.getElementById("bookauthor").value = "";
  document.getElementById("booktitle").value = "";
  document.getElementById("bookpages").value = "";
  document.getElementById("bookread").value = false;
  addBookDialog.showModal();
}

function markButton(library, index) {
  library.getBookByIndex(index).markRead();
}

function removeButton(library, index) {
  library.removeBookFromLibraryByIndex(index);
}

function addBookAction(library) {
  library.addBookToLibrary(
    Book(
      document.getElementById("booktitle").value,
      document.getElementById("bookauthor").value,
      document.getElementById("bookpages").value,
      document.getElementById("bookread").value
    )
  );
  document.getElementById("add-book-dialog").close();
}

function addBookCancel() {
  document.getElementById("add-book-dialog").close();
}

export function eventHandler(library) {
  document.getElementById("body").addEventListener("click", (e) => {
    switch (e.target.id) {
      //   case "add-book-action":
      //     addBookAction(library);
      //     break;
      case "add-book-cancel":
        addBookCancel();
        break;
      case "remove-button":
        removeButton(library, e.target.dataset.index);
        saveLibary(library);
        displayBooks(library);
        break;
      case "mark-button":
        markButton(library, e.target.dataset.index);
        saveLibary(library);
        displayBooks(library);
        break;
      case "add-book-dialog-button":
        addBookDialog(library);
        break;
    }
  });
  //   <!-- required fields will only validate on submit event -->
  //   <!-- ie submit button with submit event listener on the form itself -->
  document.getElementById("add-book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookAction(library);
    saveLibary(library);
    displayBooks(library);
  });
}

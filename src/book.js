export function saveLibary(library){
  const libraryData = [];
  library.getLibrary().forEach(book=>{
    libraryData.push(book.getBook())
  })
  localStorage.setItem('myLibrary',JSON.stringify(libraryData))
}

export function loadLibrary(){
  return JSON.parse( localStorage.getItem('myLibrary'));
}

export function Book(bookTitle, bookAuthor, bookPages,bookRead) {
  let title = bookTitle;
  let author = bookAuthor;
  let pages = bookPages;
  let read = bookRead;

  function getBook() {
    return { title, author, pages, read };
  }

  function modifyBook(bookTitle, bookAuthor, bookPages) {
    title = bookTitle;
    author = bookAuthor;
    pages = bookPages;
  }

  function markRead() {
    if (read) {
      read = false;
    } else {
      read = true;
    }
  }

  return { getBook, modifyBook, markRead };
}

export function Library() {
  const library = [];

  function addBookToLibrary(book) {
    library.push(book);
  }

  function getLibrary() {
    return library;
  }

  function getBookByIndex(i){
    return library[i];
  }

  function removeBookFromLibraryByBookTitle(book) {
    library.splice(
      library.findIndex((entry) => {
        entry.getBook().title == book.getBook().title;
      }),
      1
    );
  }

  function removeBookFromLibraryByIndex(i) {
    library.splice(i, 1);
  }

  return {
    addBookToLibrary,
    getBookByIndex,
    removeBookFromLibraryByBookTitle,
    removeBookFromLibraryByIndex,
    getLibrary,
  };
}

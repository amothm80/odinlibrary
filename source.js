const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let log = `${this.title} by ${this.author}, ${this.pages} pages, `;
        this.read? log += `has been read.`:log +=`not read yet.`;
        return log;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(myLibrary){
    let booklist = document.querySelector("#booklist")
    for (let book of myLibrary){
        let readtext = book.read? `Yes`:`No`;
        booklist.innerHTML +=
        `<div class="bookcard">
            <h4><bold>Title: </bold></h4><p>${book.title}</p>
            <h4><bold>Author: </bold></h4><p>${book.author}</p>
            <h4><bold>Pages: </bold></h4><p>${book.pages}</p>
            <h4><bold>Read: </bold></h4><p>${readtext}</p>
        </div>`
        // console.log(book.info())
    }
}

book = new Book("lotr", "jrr tolkien", 295, true) 
addBookToLibrary(book) 
book = new Book("the trial", "franz kafka", 190, false)
addBookToLibrary(book)
displayBooks(myLibrary)
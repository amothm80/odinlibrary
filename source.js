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
    for (let book of myLibrary){
        console.log(book.info())
    }
}

book = new Book("lotr", "jrr tolkien", 295, true) 
addBookToLibrary(book) 
book = new Book("the trial", "franz kafka", 190, false)
addBookToLibrary(book)
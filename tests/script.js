function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (title + author + pages + read);
    }
  }


const book1 = new Book('The world is good', 'by Pikachu', "10 pages", "Read");

console.log(book1.info());


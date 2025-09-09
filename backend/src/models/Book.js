export default class Book {
    static nextId = 1;

    constructor(title, author, yearPublication, availability) {
        this.code = Book.nextId++;
        this.title = title;
        this.author = author;
        this.yearPublication = yearPublication;
        this.availability = availability
    }
}
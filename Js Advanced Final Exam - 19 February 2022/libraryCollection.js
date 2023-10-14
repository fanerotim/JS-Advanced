class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        let currentBook = {
            bookName,
            bookAuthor,
            payed: false
        }
        this.books.push(currentBook);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {

        for (let book of this.books) {
            if (book.bookName === bookName) {
                if (book.payed === true) {
                    throw new Error(`${bookName} has already been paid.`)
                }
                book.payed = true;
                return `${bookName} has been successfully paid.`
            }
        }
        throw new Error(`${bookName} is not in the collection.`)
    }

    removeBook(bookName) {

        for (let book of this.books) {
            if (book.bookName === bookName) {
                if (book.payed === false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                }
                let bookIndex = this.books.indexOf(bookName);
                let removedBook = this.books.splice(bookIndex, 1);
                return `${bookName} remove from the collection.`
            }
        }
        throw new Error(`The book, you're looking for, is not found.`)
    }

    getStatistics(bookAuthor) {

        if (bookAuthor === undefined) {
            let output = '';
            output += `The book collection has ${this.capacity - this.books.length} empty spots left.\n`
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let booksArr = [];

            for (let book of this.books) {
                if (book.payed === true) {
                    booksArr.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`)
                } else {
                    booksArr.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`)
                }
            }
            output += booksArr.join('\n');
            return output;
        }
        
        for (let book of this.books) {
            if (book.bookAuthor === bookAuthor) {
                if (book.payed === true) {
                    return `${book.bookName} == ${book.bookAuthor} - Has Paid.`
                }
                return `${book.bookName} == ${book.bookAuthor} - Not Paid.`
            }
        }
        throw new Error(`${bookAuthor} is not in the collection.`)
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());





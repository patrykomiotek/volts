// types.ts

// Branded type dla ISBN
type ISBN = string & { readonly brand: unique symbol };

// Typ dla książki
type Book = {
  isbn: ISBN;
  title: string;
  author: string;
  year: number;
};

// Interfejs dla użytkownika
interface User {
  id: number;
  name: string;
}

// Typ dla wypożyczenia
type Loan = {
  book: Book;
  user: User;
  dueDate: Date;
};

// Typ warunkowy dla statusu książki
type BookStatus<T extends Book> = T & {
  status: 'available' | 'borrowed';
};

// library.ts

class Library {
  private books: Map<ISBN, BookStatus<Book>> = new Map();
  private loans: Loan[] = [];

  addBook<T extends Book>(book: T): void {
    const bookWithStatus: BookStatus<T> = {
      ...book,
      status: 'available',
    };
    this.books.set(book.isbn, bookWithStatus);
  }

  borrowBook(isbn: ISBN, user: User): void {
    const book = this.books.get(isbn);
    if (book && book.status === 'available') {
      book.status = 'borrowed';
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14); // 2 weeks loan period
      this.loans.push({ book, user, dueDate });
    } else {
      throw new Error('Book is not available');
    }
  }

  returnBook(isbn: ISBN): void {
    const book = this.books.get(isbn);
    if (book) {
      book.status = 'available';
      this.loans = this.loans.filter((loan) => loan.book.isbn !== isbn);
    }
  }

  getAvailableBooks(): Book[] {
    return Array.from(this.books.values()).filter(
      (book) => book.status === 'available',
    );
  }

  getBorrowedBooks(): Loan[] {
    return this.loans;
  }
}

// utils.ts

function createISBN(isbn: string): ISBN {
  // Simple validation, in real-world scenario this should be more robust
  if (!/^\d{13}$/.test(isbn)) {
    throw new Error('Invalid ISBN');
  }
  return isbn as ISBN;
}

// main.ts

const library = new Library();

const book1 = {
  isbn: createISBN('9780123456789'),
  title: 'TypeScript in Action',
  author: 'John Doe',
  year: 2023,
} as const;

const book2 = {
  isbn: createISBN('9780987654321'),
  title: 'Advanced TypeScript',
  author: 'Jane Smith',
  year: 2022,
} as const;

library.addBook(book1);
library.addBook(book2);

const user: User = { id: 1, name: 'Alice' };

library.borrowBook(book1.isbn, user);

console.log('Available books:', library.getAvailableBooks());
console.log('Borrowed books:', library.getBorrowedBooks());

library.returnBook(book1.isbn);

console.log('Available books after return:', library.getAvailableBooks());

/**
 * System zarządzania biblioteką
 *
 * Stwórz prosty system zarządzania biblioteką, który będzie zawierał następujące funkcjonalności:
 * 1. Dodawanie książek do biblioteki
 * 2. Wypożyczanie książek
 * 3. Zwracanie książek
 * 4. Wyświetlanie listy dostępnych książek
 * 5. Wyświetlanie listy wypożyczonych książek
 */
// Typ dla książki
type Book = {
  isbn: ISBN; // branded type
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
type Borrow = {
  book: Book;
  user: User;
  dueDate: Date;
};

type Library = Array<Book>;

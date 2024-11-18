/**
 * Stwórz dwa interfejsy: Name (z właściwością name: string)
 * i Age (z właściwością age: number). Następnie utwórz typ
 * Person jako przecięcie tych dwóch interfejsów.
 * Na koniec napisz funkcję introducePerson, która przyjmuje
 * obiekt typu Person i zwraca string z przedstawieniem osoby.
 */

// Zdefiniuj interfejsy Name i Age
interface Name {
  name: string;
}
interface Age {
  age: number;
}

// Utwórz typ Person
interface Person extends Name, Age {}

// Zaimplementuj funkcję introducePerson
function introducePerson(person: Person): string {
  // Implementacja
  return `My name is ${person.firstName} and I'm ${person.age} years old.`;
}

// Przykładowe użycie:
const john: Person = { name: 'John', age: 30 };
console.log(introducePerson(john)); // Powinno zwrócić "My name is John and I'm 30 years old."

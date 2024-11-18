/**
 * Napisz generyczną funkcję firstElement, która
 * przyjmuje tablicę dowolnego typu i zwraca pierwszy
 * element tej tablicy (lub undefined, jeśli tablica jest pusta).
 */

// Zaimplementuj funkcję firstElement
const firstElement = <T>(arg: T[]) => {
  if (arg.length === 0) {
    return undefined;
  }
  return arg[0];
};

// Przykładowe użycie:
console.log(firstElement([1, 2, 3])); // Powinno zwrócić 1
console.log(firstElement(['a', 'b', 'c'])); // Powinno zwrócić "a"
console.log(firstElement([])); // Powinno zwrócić undefined

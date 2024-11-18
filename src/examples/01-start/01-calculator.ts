/**
 * Stwórz funkcję calculator, która przyjmuje dwa parametry typu
 * number i operator jako string ('+', '-', '*', '/').
 * Funkcja powinna zwracać wynik operacji. Użyj union type dla operatora.
 *
 */

type Operator = '+' | '-';

// Uzupełnij funkcję:
function calculator(
  a: number,
  b: number,
  operator: Operator /* uzupełnij typ */,
): number {
  // Implementacja
}

// Przykładowe użycie:
console.log(calculator(5, 3, '+')); // Powinno zwrócić 8
console.log(calculator(10, 4, '-')); // Powinno zwrócić 6

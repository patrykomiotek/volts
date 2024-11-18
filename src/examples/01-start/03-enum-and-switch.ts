/**
 * Stwórz enum DayOfWeek z dniami tygodnia.
 * Następnie napisz funkcję getWorkingHours, która
 * przyjmuje dzień tygodnia i zwraca liczbę godzin pracy
 * (np. 8 dla dni roboczych, 0 dla weekendu).
 */

// Zdefiniuj enum DayOfWeek
enum DayOfWeek {
  Monday = 8,
  Tue = 8,
  Wed = 8,
  Thu = 8,
  Fri = 8,
  Saturday = 0,
  Sunday = 0,
}

// Zaimplementuj funkcję getWorkingHours
function getWorkingHours(day: DayOfWeek): number {
  // Użyj switch do określenia liczby godzin
  switch (day) {
    case DayOfWeek.Saturday:
    case DayOfWeek.Sunday:
      return 0;
    default:
      return 8;
  }
}

// Przykładowe użycie:
console.log(getWorkingHours(DayOfWeek.Monday)); // Powinno zwrócić 8
console.log(getWorkingHours(DayOfWeek.Saturday)); // Powinno zwrócić 0

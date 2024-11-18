interface Employee {
  id: number;
  name: string;
  department: string;
  role: string;
}

// function getProperty<T, K extends keyof T>(obiekt: T, klucz: K) : T[K]{
//   return obiekt[klucz];
// }

// function getProperty<T extends keyof Employee>(employee: Employee, property: T): Employee[T] {
//   return employee[property];
// }

const employee: Employee = {
  id: 1,
  name: 'A',
  department: 'B',
  role: 'C',
};

const value = getProperty(employee, 'id');

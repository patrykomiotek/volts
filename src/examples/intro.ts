function log() {
  console.log('Brak wartości zwracanej');
  throw new Error('sth');
}

interface Employee {
  id: number;
  name: string;
}
interface Manager {
  team: string;
  name: number;
}

// type Boss = Employee | Manager;
type Boss = {
  readonly [K in keyof Employee]?: Employee[K];
};
type ReadonlyHelper<T> = {
  readonly [K in keyof T]: T[K];
};
// interface Employee { readonly id: number; readonly name: string; }

const boss: Boss = {
  // id: 123,
  name: 'dsffds',
  // team: 'A'
};

const readonlyEmployee: ReadonlyHelper<Employee> = {
  id: 123,
  name: 'Janusz',
};

// TS
type ReadonlyMember = typeof readonlyEmployee;

// JS
// if (sth typeof === 'object') {
//   console.log('error');
// }

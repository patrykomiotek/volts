class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}

// function createInstance<T extends new (...args: any[]) => any>(
// function createInstance<T extends new (...args: any[]) => any>(constructor: T, ...constructorProps: any[]): InstanceType<T> {
//   return new constructor(constructorProps);
// }
// function createInstance<T extends new (...args: any[]) => any>
//   (constructor: T, ...constructorProps: ConstructorParameters<T>):
//   InstanceType<T> {
//   return new constructor(...constructorProps);
// }

function createInstance1<T extends new (...args: any[]) => any>(
  constructor: T,
  ...props: ConstructorParameters<T>
): InstanceType<T> {
  return new constructor(...props);
}

const person = createInstance1(Person, 'Test', 1);

const person = createInstance1(Person, 'john', 34); // Typ: Person
const car = createInstance1(Car, 'polonez'); // Typ: Car

// const person = new Person('random');

interface Human {
  name: string;
}
declare let human: Human;

interface Developer extends Human {
  languages: string[];
  code(): void;
}
declare let developer: Developer;

interface TaxiDriver extends Human {
  drive(): void;
}
declare let taxiDriver: TaxiDriver;

// Employee is a developer or driver (or one both of them)
type CompanyEmployee = Developer | TaxiDriver;

function helpMeWithCode(developer: Developer) {
  developer.code();
}

const employeeFactory = (): CompanyEmployee => {
  if (Math.random()) {
    return {
      name: 'Joe',
      drive() {
        console.log('implementation');
      },
    };
  } else {
    return {
      name: 'Mark',
      languages: ['TypeScript'],
      code() {
        console.log('implementation #2');
      },
    };
  }
};

// annotations - check compatibility
const p1: CompanyEmployee = employeeFactory();
const p2: Developer = employeeFactory();

// assertions
const p3 = employeeFactory() as CompanyEmployee; // unecessary
const p4 = employeeFactory() as Developer;

helpMeWithCode(employeeFactory());
helpMeWithCode(employeeFactory() as Developer);

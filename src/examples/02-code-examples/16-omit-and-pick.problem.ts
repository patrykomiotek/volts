import { Equal, Expect } from '../../helpers/type-utils';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: 234;
  job: 'Developer';
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */
declare const user: User;

// type MyType = unknown;
// type MyType = typeof user;
// type MyType = Omit<User, 'id' | 'age' | 'job'>;
type MyType = Pick<User, 'firstName' | 'lastName'>;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];

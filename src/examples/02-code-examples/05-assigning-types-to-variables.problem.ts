import { expect, it } from 'vitest';

interface User {
  // id: number;
  id: number | string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser = {
  id: 1,
  firstName: 'Janusz',
  lastName: 'Kowalski',
  isAdmin: false,
};
// const defaultUser: User = {

// };

const getUserId = (user: User) => {
  return user.id;
};

// const getUserIdFromObject = (id: number) => {
const getUserIdFromObject = (id: User['id']) => {
  return id;
};

it('Should get the user id', () => {
  expect(getUserId(defaultUser)).toEqual(1);
});

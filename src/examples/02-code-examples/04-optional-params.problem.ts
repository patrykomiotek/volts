import { expect, it } from 'vitest';

export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it('Should work with just the first name', () => {
  const name = getName('Joe');

  expect(name).toEqual('Doe');
});

it('Should work with the first and last name', () => {
  const name = getName('Joe', 'Doe');

  expect(name).toEqual('Joe Doe');
});

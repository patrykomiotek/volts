import { expect, it } from 'vitest';
import { Equal, Expect } from '../../helpers/type-utils';

export const concatenateFirstNameAndLastName = (user: unknown) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

it('Should add fullName to an object which only contains firstName and lastName', () => {
  const users = [
    {
      firstName: 'Janusz',
      lastName: 'Kowalski',
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);

  expect(newUsers).toEqual([
    {
      firstName: 'Janusz',
      lastName: 'Kowalski',
      fullName: 'Janusz Kowalski',
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<{ firstName: string; lastName: string } & { fullName: string }>
      >
    >,
  ];
});

it('Should retain other properties passed in', () => {
  const users = [
    {
      id: 1,
      firstName: 'Janusz',
      lastName: 'Kowalski',
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);

  expect(newUsers).toEqual([
    {
      id: 1,
      firstName: 'Janusz',
      lastName: 'Kowalski',
      fullName: 'Janusz Kowalski',
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<
          { id: number; firstName: string; lastName: string } & {
            fullName: string;
          }
        >
      >
    >,
  ];
});

it('Should fail when the object passed in does not contain firstName', () => {
  const users = [
    {
      firstName: 'Janusz',
    },
  ];

  const newUsers = users.map(
    // @ts-expect-error
    concatenateFirstNameAndLastName,
  );
});

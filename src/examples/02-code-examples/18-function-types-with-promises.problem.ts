import { expect, it } from 'vitest';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  createUser: () => Promise<string>,
  getUser: (id: User['id']) => Promise<User>,
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it('Should create the user, then get them', async () => {
  const user = await createThenGetUser(
    async () => 'abc',
    async (id) => ({
      id,
      firstName: 'Joe',
      lastName: 'Doe',
    }),
  );

  expect(user).toEqual({
    id: '123',
    firstName: 'Joe',
    lastName: 'Doe',
  });
});

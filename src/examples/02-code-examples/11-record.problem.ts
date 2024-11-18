import { expect, it } from 'vitest';

type Role = 'admin' | 'user' | 'member';

const createCache = () => {
  const cache: Record<string, string> = {};
  // const cache: Record<Role, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it('Should add values to the cache', () => {
  const cache = createCache();

  cache.add('123', 'Joe');

  expect(cache.cache['123']).toEqual('Joe');
});

it('Should remove values from the cache', () => {
  const cache = createCache();

  cache.add('123', 'Joe');
  cache.remove('123');

  expect(cache.cache['123']).toEqual(undefined);
});

import { expect, it } from 'vitest';
import { Equal, Expect } from '../../helpers/type-utils';

const guitarists = new Set<string>();

guitarists.add('Jimi Hendrix');
guitarists.add('Eric Clapton');

it('Should contain Jimi and Eric', () => {
  expect(guitarists.has('Jimi Hendrix')).toEqual(true);
  expect(guitarists.has('Eric Clapton')).toEqual(true);
});

it('Should give a type error when you try to pass a non-string', () => {
  // @ts-expect-error
  guitarists.add(2);
});

it('Should be typed as an array of strings', () => {
  const guitaristsAsArray = Array.from(guitarists);

  // type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
  type tests = Expect<Equal<typeof guitaristsAsArray, string[]>>;
  const _test: Equal<typeof guitaristsAsArray, string[]> = true;

  type Hide<T, S extends keyof T> = {
    [K in keyof T]: K extends S ? never : T[K];
  };
  interface Config {
    host: string;
    port: number;
    path: string;
  }

  type HideHost = Expect<
    // FIXME: Equal<Hide<Config, 'host'>, { port: number; path: string }>
    Equal<Omit<Config, 'host'>, { port: number; path: string }>
  >;
  type HidePath = Expect<
    Equal<Omit<Config, 'path'>, { host: string; port: number }>
  >;
});

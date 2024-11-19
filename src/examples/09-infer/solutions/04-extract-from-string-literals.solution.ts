import { Equal, Expect } from '../../../helpers/type-utils';

type SplitString<S> = S extends `${infer T1}-${infer T2}` ? [T1, T2] : [S]; // change me

// use cases:
type T1 = SplitString<'hello-world'>; // ["hello", "world"]
type T2 = SplitString<'typescript'>; // ["typescript"]
type T3 = SplitString<'a-b-c'>; // ["a", "b-c"]

type test = [
  Expect<Equal<T1, ['hello', 'world']>>,
  Expect<Equal<T2, ['typescript']>>,
  Expect<Equal<T3, ['a', 'b-c']>>,
];

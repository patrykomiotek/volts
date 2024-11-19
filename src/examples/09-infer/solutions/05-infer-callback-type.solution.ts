import { Equal, Expect } from '../../../helpers/type-utils';

type CallbackParameter<T> = T extends (cb: (...args: infer S) => void) => void
  ? S
  : []; // change me

// use cases
type T1 = CallbackParameter<
  (callback: (error: Error, result: string) => void) => void
>; // [Error, string]
type T2 = CallbackParameter<(cb: (x: number) => void) => void>; // [number]
type T3 = CallbackParameter<(callback: () => void) => void>; // []

type test = [
  Expect<Equal<T1, [Error, string]>>,
  Expect<Equal<T2, [number]>>,
  Expect<Equal<T3, []>>,
];

// 1. test runner
// 2. run tsc
// 3. check tests

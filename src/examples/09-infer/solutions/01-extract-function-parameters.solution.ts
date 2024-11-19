import { Expect } from '../../../helpers/type-utils';
// import { Equal, Expect } from '../../../helpers/type-utils';

type FirstParameter<T> = T extends (a: infer S, ...rest: any[]) => void
  ? S
  : never; // change me

// example usage:
type T1 = FirstParameter<(a: number, b: string) => void>; // number
type T2 = FirstParameter<(x: boolean) => void>; // boolean
type T3 = FirstParameter<() => void>; // never

// export type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

type IsBoolean<T> = T extends boolean ? true : false;

type TestType1 = Expect<IsBoolean<boolean>>;
type TestType2 = Expect<IsBoolean<true>>;
type TestType3 = Expect<IsBoolean<false>>;
type TestType4 = Expect<IsBoolean<string>>;
type TestType5 = Expect<IsBoolean<number>>;

type types = [
  Expect<Equal<T1, number>>,
  Expect<Equal<boolean, boolean>>,
  Expect<Equal<number, number>>,
  Expect<Equal<string, string>>,
  Expect<Equal<T3, unknown>>,
];

// type EXTENDS<X, Y> = X extends Y ? true : false;
// type EQ2<X, Y> = EXTENDS<X, Y> & EXTENDS<Y, X>;

type EQX<X,Y,S,T> = X extends Y ? (T extends S ? true : false) : false
type EQ2<X,Y> = EQX<X,Y,X,Y>

type B = EQ2<boolean, boolean> // boolean

type C = Expect<EQ2<boolean, string>>; // boolean
type C1 = Expect<EQ2<boolean, boolean>>; // boolean
type C2 = Expect<EQ2<string, boolean>>;
type C8 = Expect<EQ2<typeof {}, boolean>>;
type C3 = Expect<EQ2<{}, boolean>>;
type C4 = Expect<EQ2<undefined, boolean>>;
type C5 = Expect<EQ2<undefined, never>>;
type C6 = Expect<EQ2<string, string>>; // boolean

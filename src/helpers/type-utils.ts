export type Expect<T extends true> = T;

// export type Equal<X, Y> =
//   (<T>() => T extends X)
//     extends
//       (<T>() => T extends Y)
//                                 ? true
//                                 : false;

export type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;
// export type Equal<X, Y> =
//   (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
//     ? true
//     : false;

type Type1 = Expect<Equal<string, number>>;
type Type2 = Expect<Equal<string, string>>;
type Type3 = Expect<Equal<string, { name: string }>>;
type Type4 = Expect<Equal<{ name: string }, { name: string }>>;
type Type5 = Expect<Equal<{ name?: string }, { name: string }>>;

const myFunc = () => {
  return 'hello';
};

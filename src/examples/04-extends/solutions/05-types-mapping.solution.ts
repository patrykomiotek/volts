/**
 * Zdefiniuj typ OptionalProperties<T>, który zamienia wszystkie
 * właściwości typu T na opcjonalne.
 * Następnie użyj tego typu z przykładowym interfejsem.
 */
type OptionalProperties<T> = Partial<T>;
interface Me {
  name: 'test';
  surname: 'test';
}
type Test = OptionalProperties<Me>;

type MyOptionalProperties<T> = {
  // [K in keyof T]?: T[K];
  [K in keyof T]?: T[K] extends number ? T[K] : never;
};

interface MyTest {
  name: string;
}

const a: OptionalProperties<Test> = {};

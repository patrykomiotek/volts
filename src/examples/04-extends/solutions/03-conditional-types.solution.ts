/**
 * Zdefiniuj typ IsString, który przyjmuje typ T i zwraca true,
 * jeśli T jest typu string, w przeciwnym razie false.
 * Przetestuj ten typ z różnymi wartościami.
 */
type IsString<T> = T extends string ? true : false;

type MyString = IsString<'ssdfkjlsdfld'>;
type MyString2 = IsString<234>;

// function checkString<T>(arg: T): IsString<T> {
//   return arg.length;
// }

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T; // change me

// example usage
type T1 = UnwrapPromise<Promise<string>>; // string
type T2 = UnwrapPromise<Promise<number[]>>; // number[]
type T3 = UnwrapPromise<string>; // string

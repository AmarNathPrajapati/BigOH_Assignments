type check<T> = T extends string?"it is string":"not a string"
type test1 = check<string>
type test2 = check<number>

type ExtractStringOrNumber<T> = T extends string | number ? T : never;

type C = ExtractStringOrNumber<string>;  // string
type D = ExtractStringOrNumber<number>;  // number
type E = ExtractStringOrNumber<boolean>; // never (boolean is not string or number)
    

type NullabelProperties<T> = {
    [k in keyof T]:T[k] | null;
}
interface User3{
    age:number,
    name:string
}
type NullableExample = NullabelProperties<User3>;

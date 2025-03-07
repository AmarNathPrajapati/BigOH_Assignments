
type NullabelPropertiesNested<T> = T extends infer U ?
U extends object ? {
    [K in keyof U] -? : NullabelPropertiesNested<U[K]> | null;
}: U
: never;
interface User4 { 
    age:number,
    name:string,
    address:{
        pincode:number,
        district: string
    }
}

type nullabeExample = NullabelPropertiesNested<User4>
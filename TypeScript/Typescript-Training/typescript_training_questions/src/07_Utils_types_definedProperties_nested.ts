type DefinedPropertiesNested<T> =T extends infer U ? 
U extends Object ? {
    [K in keyof U] -?: DefinedPropertiesNested<NonNullable<U[K]>>
}: U
:never;

interface User2 {
    age?: number;
    name: string | null;
    address?: {
      city?: string | null;
      pin?: number | null;
};
}

type DefinedUserNested = DefinedPropertiesNested<User2>;
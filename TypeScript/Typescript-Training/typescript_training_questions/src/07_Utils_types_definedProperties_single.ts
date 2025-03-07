type DefinedProperties<T> = {
    [K in keyof T]-?: Exclude<T[K], null | undefined>;
};

  interface User {
    age?: number;
    name: string | null;
  }
  
  type DefinedUser = DefinedProperties<User>;
  
  
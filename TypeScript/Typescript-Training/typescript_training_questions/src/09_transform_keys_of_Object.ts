type TransformKeys<T, U extends Record<keyof T, string>> = {
    [K in keyof T as K extends keyof U ? U[K] : K]: T[K];
};

function transformKeys<T, U extends Record<keyof T, string>>(obj: T, map: U): TransformKeys<T, U> {
    const result: any = {};
    for (const key in obj) {
        const newKey = key in map ? map[key] : key;
        result[newKey] = obj[key];
    }
    return result;
}

const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
};

const transformedUser = transformKeys(user, { firstName: "first", lastName: "last" });
console.log(transformedUser);


function flattenObject(obj) {
    return Object
    .entries(obj)//[[][][]]
    .reduce((acc, [key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Recursively flatten nested objects
        const nested = flattenObject(value);
        for (const nestedKey in nested) {
          acc[`${key}.${nestedKey}`] = nested[nestedKey];
        }
      } else {
        // For primitive values, just add them to the result
        acc[key] = value;
      }
      return acc;
    }, {});
  }
  
  // Example usage:
  const input = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234,
        "KeyCFour":{
          "keyCFourOne": "Key C Four One"
        }
      }
    }
  };
  
  const flattened = flattenObject(input);
  console.log(flattened);
  
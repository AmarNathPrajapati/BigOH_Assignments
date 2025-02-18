function generateQueryString(url, params) {
    if (typeof url !== 'string' || url.indexOf('http') !== 0) {
        return "Error: Invalid URL"; // URL valid nahi hai toh error
    }

    if (typeof params !== 'object' || params === null) {
        return "Error: Parameters should be a valid object";
    }

    let queryString = "";
    let isFirst = true;

    for (let key in params) {
        //if not first key
        if (!isFirst) {
            queryString += "&";
        }
        isFirst = false;

        let encodedKey = handleSpace(key);
        console.log("adfasdafd___asfds", encodedKey);
        let encodedValue = handleSpace(params[key]);
        console.log("asfdasdfd___dadfda", encodedValue);
        queryString += encodedKey + "=" + encodedValue;
    }

    return queryString;
}

//  **Manual EncodeURIComponent Function**
function handleSpace(str) {
    let encodedStr = "";
    for (let i = 0; i < str.length; i++) {
        encodedStr += (str[i] === " ") ? "%20" : str[i];
    }
    return encodedStr;
}

//  **Example Usage**
let obj = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
};

let url = "https://localhost:400";
let query_string = generateQueryString(url, obj);

console.log(query_string);

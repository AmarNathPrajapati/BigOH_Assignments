function generateQueryString(url, params) {
    if (typeof url !== 'string' || !url.startsWith('http')) {
      return "Error: Invalid URL";
    }
  
    if (typeof params !== 'object' || params === null) {
      return "Error: Parameters should be a valid object";
    }
    let str = new URLSearchParams(params);
    console.log("adfdfsdsd__adf",str);
    const queryString = str.toString();
    console.log("adfasfad___asfsasdf",queryString);
    return queryString;
  }
  
 // Example Usage:
let obj =  {
   "keyOne": "value One",
   "keyTwo": "value Two",
   "keyThree": "value Three",
}
 
let url = "https://localhost:400";
let query_string = generateQueryString(url, obj)
requiredQuery = query_string.replace(/\+/g, '%20');
console.log(requiredQuery);
 //redo 
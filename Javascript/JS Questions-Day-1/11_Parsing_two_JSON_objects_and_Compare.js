function assertObjectsEqual(actual, expected) {
    // console.log("adsfdf__step1",Object.entries(actual));
    // console.log("asadsfdf__step2",Object.entries(actual).sort());//Sorting the Entries
    // console.log("asfasddsf__step3",Object.fromEntries(Object.entries(actual).sort()));//Convert Sorted Entries Back to Object
    const sortedActual = JSON.stringify(Object.fromEntries(Object.entries(actual).sort()));//Convert Objects to JSON Strings
    // console.log("asdfsdfdsf___step4",sortedActual);
    const sortedExpected = JSON.stringify(Object.fromEntries(Object.entries(expected).sort()));

    if (sortedActual === sortedExpected) {//Compare the Strings and Print Result
        console.log("Passed");
    } else {
        console.log(`FAILED Expected ${sortedExpected}, but got ${sortedActual}`);
    }
}

// Test Cases
var expected1 = { foo: 5, bar: 6 };
var actual1 = { bar: 6, foo: 5 };
assertObjectsEqual(actual1, expected1, "detects that two objects are equal");  
// Passed 

var expected2 = { foo: 6, bar: 5 };
var actual2 = { foo: 5, bar: 6 };
assertObjectsEqual(actual2, expected2, "detects that two objects are equal");  
// Output: FAILED Expected 
//Redo
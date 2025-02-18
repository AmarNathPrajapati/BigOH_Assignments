function rotateMatrix(matrix) {
    let n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            //swapping the values
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    //Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Example Usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotateMatrix(matrix);
console.log(matrix);
console.log("Printing Matrix...");
for(let i = 0; i<matrix.length; i++){
    let row = '';
    for(let j = 0; j<matrix[i].length; j++){
        row+= matrix[i][j] + ' ';
    }
    console.log(row);
}

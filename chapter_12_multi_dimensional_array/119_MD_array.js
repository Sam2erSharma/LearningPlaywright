//Multi-dimensional arrays are arrays of arrays

//1D array / list
let result = ["pass", "fail", "skip"];

//rows*columns, 3*3 matrix
//2D array- like a table/grid
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]);//1
console.log(matrix[0][1]);//2
console.log(matrix[0][2]);//3
console.log(matrix[1][0]);//4
console.log(matrix[1][1]);//5
console.log(matrix[1][2]);//6
console.log(matrix[2][0]);//7
console.log(matrix[2][1]);//8
console.log(matrix[2][2]);//9

//Even the below is a 2d array
//Example of 2d array (1 row and 4 columns)
let matrix_2D = [
    [1, 2, 3, 4]
];

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < grid.length; i++) {//row
    for (let j = 0; j < grid[i].length; j++) {//column
        console.log(grid[i][j]);
    }
}
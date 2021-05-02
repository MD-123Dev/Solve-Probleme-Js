

//**probleme is must  resulat give :  1 8 3 1  */

let matr = [];
let matrix = [
    [1,2,4,6],
    [4,8,7,3],
    [7,6,3,1],
    [5,6,2,1]

];

/*
let x = matrix[0][0]; 
let y = matrix[1][1];
let z = matrix[2][2];
let u = matrix[3][3];

console.log(x,y,z,u);*/

const rows = matrix.length;

for(let i=0;i<rows;i++){
    for(let j=i;j<=i;j++){
    
            matr.push(matrix[i][j]);
     
    }
    
}

console.log(matr);


//**array inverse  */

const arry = [1,2,3,4,5,7,9,10,12,14];

let newarray = [];

let countarry = arry.length-1;
for(let i = countarry;i>=0;i--){

    newarray.push(arry[i]);
}

console.log(newarray);
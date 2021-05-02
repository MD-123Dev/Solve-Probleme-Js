
//****arry2 * array1 =>> [6] * [1,8,5,3,7,2,6,8,6,9,6]  **** */
const arry1 = [1,8,5,3,7,2,6,8,6,9,6];

const arry2 = [6,8,3,4];

var tot =[];

for(let i=0;i<arry2.length;i++){
    for(let j=0;j<arry1.length;j++){
       tot = arry2[i] * arry1[j];
            console.log(tot);

       
    }
     console.log("**********");
   
}


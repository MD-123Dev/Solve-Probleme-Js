
///***elemnt arr1 not esixt in arr2 */

let arr1 = [1,2,3,4,5,6,7,8];

let arr2 = [2,5,6,7];


let result =  arr1.filter(x => arr2.indexOf(x)===-1); //**filtter with this condition */

console.log(result);
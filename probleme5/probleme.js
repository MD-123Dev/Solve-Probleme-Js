
//***function sort  */

const arry = ['a','c','b','f','d','l','e'];

var resu = [];

//*********************************** */


function convertAscci(){

    for(let i=0;i<arry.length;i++){
        resu.push(arry[i].charCodeAt(0));
    }

    return resu;
}

//*********************************** */

 function insertionSort(arr) {

    console.log(arr);
        for (let i = 1; i < arr.length; i++) {

            let current = arr[i];
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
    return arr;
}

//*********************************** */


let arryNew = insertionSort(convertAscci());
console.log(arryNew);
var arryNew2 = [];
for(let i=0;i<arryNew.length;i++){
    
    arryNew2.push(String.fromCharCode(arryNew[i]));//**convert ascci to char */

}
console.log(arryNew2);
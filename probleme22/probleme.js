//** copier value to auther value from array like  [1,2,3,4,5,8,6] => [1,2,3,4,5,8,4] chnage 6 to 4 */


function copierElement(array,indexelemnt,poschanged){


    for(let i=0;i<=indexelemnt;i++){
        array[poschanged] = array[i];
    }
    return array;
}

console.log(copierElement([1,2,3,4,5,8,6],3,6)); //**element 6 i array  change to 4 */

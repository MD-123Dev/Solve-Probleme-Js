

//***random array elemnt " change position element in array " */


let arr = [1,2,3,0,5,6,7,8];

let indexelement = 1;

let pos = 4;
let arrynew = [];
let rand = 0;

//****function random unique is not my algo  */
let haveIt = [];
function generateUniqueRandom(maxNr) {

    let random = (Math.random() * maxNr).toFixed();

    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {

         return  generateUniqueRandom(maxNr);
       
    }
  }
}
//**** ***************** fin */

for(let i=0;i<arr.length;i++){
    
    let randx = generateUniqueRandom(i+1)

 

       arrynew.push(arr[randx]);


}

console.log(arrynew);
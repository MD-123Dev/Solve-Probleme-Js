

//**reamplace like 1 with 0 */

function remplaceNumber(arraynumber,valueremplace){


    let i=0;

    for( i ;i<arraynumber.length;i++){
        if(arraynumber[i] == valueremplace){
            arraynumber[i] = 0;
            
        }
    }

    return arraynumber;
}

console.log(remplaceNumber([1,5,3,1,2,1,3,5,7,8,9,3,4,5,6],1));
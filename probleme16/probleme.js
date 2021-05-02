

///***doubler cracter like function(ab,2) => resulat is ababab ( ab to ababab) */

function duplicateCharString(word,repeatvalue){

     
     let arr = [];
     let arrnew = [];

    

     for(let i=0;i<word.length;i++){
          arr.push(word[i]) ;
     }

     for(let i=0;i<repeatvalue+1;i++){
          for(let j=0;j<arr.length;j++){
          arrnew.push(arr[j]);
          }
     }

     let newvalue = arrnew.toString();

    return  newvalue.replace(/,/g,'');
}


console.log(duplicateCharString("abc",3));


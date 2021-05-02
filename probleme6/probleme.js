
//***angular to Angular */
function upperCaseFirstChart(){

     const word = "angular";
   //const word = "laravel";
     

     let x = word[0].charCodeAt(0);

     let y = x - 32;

     let t = String.fromCharCode(y);

    let h = word.replace(word[0],t);
       
    console.log(h);
   

}

upperCaseFirstChart();
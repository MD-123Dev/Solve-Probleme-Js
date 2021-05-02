
function UperCaseWord(){

         const word = "probleme";
         //const word = "laravel";

         var x = [];
         var y = [];
         var z = [];

         for(let i =0;i<word.length;i++){
              x.push(word[i].charCodeAt(0)) ;
         }

        for(let i=0;i<x.length;i++){
            y.push(x[i] - 32);
        }

         for(let i=0;i<y.length;i++){
            z.push(String.fromCharCode(y[i]));
        }
        
        let f = z.toString();
        console.log(f.replace(/,/g,''));


}

UperCaseWord();
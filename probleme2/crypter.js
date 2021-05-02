

function crypterAlgo(){

         const diction = ['A','B','C','D','E','F','G','H','I','L','Y','Z','1','2','3','4','K','U','@','r','_','5','6','7','8','9',';'];

         var mots = "javascript";
         let myMap = new Map();
         var x = '';

         for(let i=0;i<mots.length ;i++){
             //***chaque charter 4 caracter dans diction  */
            for(let j=0;j<4;j++){
               let randm = Math.floor((Math.random()*(diction.length)));
                x += diction[randm];
                myMap.set(mots[i],x);
            }
         }

            /*console.log(myMap.get('j'));
            console.log(myMap.get('a'));
            console.log(myMap.get('v'));
            console.log(myMap.get('a'));
            console.log(myMap.get('s'));
            console.log(myMap.get('c'));
            console.log(myMap);*/

          for( my in myMap){
            x+=myMap.get(my)
          }
      return x;





}

console.log(crypterAlgo());



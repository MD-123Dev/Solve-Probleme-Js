//**how many string repeat in text and display what is repeat more or used more   */
//** not!!!!!!! */

const text = "Help Teaching  makes it easy to create. Choose questions from our library of questions or create ";

function convertToArray(text) {

       let arry = text.split(' ');
       return arry;
}

  function contHowManyWordRepeat(arry) {

       let cont = 0;


       let myMap = new Map() ;

       for (let i = 0; i < arry.length; i++) {

              for (let j = 0; j < arry.length; j++) {

                     if (arry[j].search(arry[i]) != -1) { /// search(i) is what is not change

                            cont++;

                            myMap[arry[i]] = cont;

                     }

              }
              cont = 0;
       }

       return myMap;
}


//** get just more with map() !!!!!?????, */

//console.log(mymap);

let arry = convertToArray(text);

    const mymap =  contHowManyWordRepeat(arry);
    console.log(mymap);
    
    




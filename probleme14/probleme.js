//***remplace in text word with other wortde ( sont utilser function remplace()) */

const text = "Help Teaching  makes it easy to create. Choose questions from our library of questions or create ";

function convertToArray(text) {

       let arry = text.split(' ');
       return arry;
}

function convertToText(array){
  let newtext = array.toString();

   return newtext.replace(/,/g,' ');
}

function run(){
    let arrynew = convertToArray(text);
    let word = "questions";
    for(let i=0;i<arrynew.length;i++){
        if(arrynew[i].search(word)!=-1){
            arrynew[i] = "HELLO";
        }
    }
    console.log("++++++++++++++++++++++++");
    console.log(convertToText(arrynew));
}
run();

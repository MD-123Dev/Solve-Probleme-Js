
//**how many string repeat in text  */

const text = "Help Teaching makes it easy to create a test. Choose from our library of questions or create your own. We offer questions by grade level and subject. With question types ranging from True or False to Multiple Choice, we have what you need to easily generate a test.";

const stringword = "questions";
//const stringword = "Teaching";
//const stringword = "library";

let cont = 0;

let arry = text.split(' ');//**convsrt to arry */


for(let i=0;i<arry.length;i++){
       
        if( arry[i].search(stringword) != -1 ){
          cont++;
        }

    
}

console.log(`word ${stringword} Duplicated : ${cont}`);
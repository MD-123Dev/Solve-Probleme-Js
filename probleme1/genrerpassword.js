
//***run code : node genrerpassword.js */

function genererPassword(){

    const arrymots = ['A','B','C','D','E','F','G','H','I','L','Y','Z','1','2','3','4','K','U','@','r','_'];

    //const countpassword = 14;

    var z = [];

   let i=1 ;

    for(i;i<=countpassword;i++){
        
               let rand = Math.floor((Math.random()*(arrymots.length))); //** random 1 to 20 nombre arry*/
              z.unshift(arrymots[rand]); 
        
    }
    let valueconv = z.toString();//**convert arry to straing  */
    let stringarry = valueconv.replace(/,/g,'');//**reomve ',' */

    console.log(stringarry);


}

genererPassword();



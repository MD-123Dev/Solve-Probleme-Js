
//** 000012220000 to 1222 ( remove 0) */
const x = "0000122220000";
const y = "112225550000";



let arr = [];

for(let i=0;i<x.length;i++){
   
    if(x[i]!== '0'){
        
          arr.push(x[i]);

    }
   

}

let nombrson = arr.toString();

console.log(nombrson.replace(/,/g,''));


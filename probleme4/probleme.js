
//*** la somme des nombres dans les tableaux qui superieure ou egal a 10 . puis arry1 + arry2 + arry3 */

const arry1 = [4,8,3,12,10,7,14,41,30];

const arry2 = [10,21,36,41,63,4,9,10];

const arry3 = [30,21,4,8,63,41,23,14];

var x = 0
    y = 0,
    z = 0;

for(let i=0;i<arry1.length;i++){
      if(arry1[i]>=10){
           x +=arry1[i];
      }
   
}

 for(let j=0;j<arry2.length;j++){
        if(arry2[j]>=10){
                y +=arry2[j];
            }
    }

    for(let y=0;y<arry3.length;y++){
       if(arry3[y]>=10){
           z +=arry3[y];
      }
    }

    console.log(x);
    console.log(y);
    console.log(z);
    console.log("**************");

    console.log(x+y+z);
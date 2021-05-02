
//**Check if two array equals or not   */

let array1 = [4,5,6,3,9,8,4,2,3,4];

let array2 = [6,8,2,3,1,1,4,5,3,6];

let array3 = [4,5,6,3,9,8,4,2,3,4];

let array4 = [4,5,6,3,9,1,4,7,7,4];

let array5 = [4,5,6,3,9,1,4,7,8,6,7,7,4];



 function equalsArray(array1,array2){ //**return 1 or -1 */

  //**check size is equal */
    if(array1.length>array2.length || array2.length>array1.length){
      return 0;
      
    }
    
    for(let i=0;i<array1.length;i++){
        let arr1 = array1.toString();//*because any array is object in Js
        let arr2 = array2.toString();
      if(arr1==arr2){

        return 1;

      }
      else{

       return -1;
      }
       
  }
  
}

///*****run  */

let value = equalsArray(array1,array3);
console.log("value is :"+value);

if(value==1){
    console.log("equals array");
}
else if(value==-1){
    console.log("Not equals array");

}
else if(value==0){
       console.log(" size not equals !!!!!");

}



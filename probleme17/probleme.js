
function getMax(){

    let arr = [1,5,6,7,2,3,6,8,9,4];

    let maxvalue = 0;

    
    for(let i=0;i<arr.length;i++){
       
            if(arr[i]>maxvalue){

                maxvalue = arr[i]; 
        }
            
    }
      console.log(maxvalue);
}

function getMin(){

    let arr = [5,6,7,2,3,6,8,9,4];

    let minvalue = 9;

    
    for(let i=0;i<arr.length;i++){
       
            if(arr[i]<minvalue){

                minvalue = arr[i]; 
        }
            
    }
      console.log(minvalue);
}


getMax();

getMin();
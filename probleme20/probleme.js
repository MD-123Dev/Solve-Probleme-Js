//**** Each time a portion of an array is taken and shown ( when you repeat run ) */

     

      let array = [1,2,3,4,5,6,7,8];

       let stop1 = Math.floor((Math.random()*7));
        let start = Math.floor((Math.random()*7));

        /*let start2 = 3;
        let stop2 =  5; */

       let arraynew = [];

      for(let i =start;i<stop1;i++){
        arraynew.push(array[i]);
      }
 
      console.log(arraynew);

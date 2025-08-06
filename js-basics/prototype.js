// Array.prototype.joinOriginal=Array.prototype.join;
// Array.prototype.join=function(){
//      console.log(this); 
//      console.log(arguments)
//      return this.joinOriginal(...arguments)
//     }


// Array.prototype.joinOriginal=Array.prototype.join;
Array.prototype.joinOriginal=function(){
     console.log(this); 
     console.log(arguments)
     return this.join(...arguments)
    }
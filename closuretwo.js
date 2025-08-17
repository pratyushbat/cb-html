function counter(val){    
     function plus(){
        console.log(++val)
    }
   return plus;
}
var c=counter(10);
c();
c();
c();


function createCounter(initialVal,deltaVal){
    return {
        up(){
            initialVal+=deltaVal;
            console.log(initialVal)
        },
        down(){
            initialVal-=deltaVal;
            console.log(initialVal)
        }
    }

}

var c=createCounter(10,2)
console.log('-----------')
c.up();
c.up();
c.down();
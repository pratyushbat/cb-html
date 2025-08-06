function greet(name){
        console.log('hello',name)
    }

    // one level function
console.log(greet('arnav'))
console.log(greet('pankaj'))


// hof two level step of function
function createGreeter(greeting){
    function greet(name){
        if(typeof name=== 'function')
        console.log(greeting,name())
      else  if(typeof name=== 'string')
        console.log(greeting,name)
    }
    return greet;
}


let g1= createGreeter("Good Morning");
let g2= createGreeter("Good Evening");
console.log(  g1('arnav'))
console.log(  g1('pankaj'))
console.log(  g2('arnav'))
console.log(  g2('pankaj'))


function getName(){
    return document.getElementById('namebox').value;
}
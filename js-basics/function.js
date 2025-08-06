// console.log(beta())
// console.log(alpha())

// console.log('hoisting-all variable with var and  function definiton is put at top by the interpretor')
// console.log('function defined like gamma cannot be hoisted');
function alpha(){
    return "A";
}

function beta(){
    return "B";
}
let gamma=function(){
    return "C";
}

// console.log(gamma())

function area(height,width){
    // console.log('height',height)
    // console.log('width',width)
    // as width can be undefined
    if(!width){
        return Math.PI* height*height;
    }
    return height*width;
}
console.log('area(3,4)',area(3,4))
console.log('area(4)',area(4))

function hello(){
    console.log('hello world',arguments)
}
hello(1,2)
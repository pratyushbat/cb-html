c = 20; //global scope
var d = 30; //function scope
let e = 50; //block scope

function fun() {
  let a = 5;
  if (a === 5) {
    let b = 10;
    var f = 10;
    g = 10;

    console.log("Inside var f", f);
    console.log("Inside let b", b);
    console.log("Inside global g", g);
  }
  console.log("outside f", f);
  console.log("outside g", g);
  // console.log('outside b',b)
}

// fun();
// console.log('global g',g)
// console.log('global f',f)

square_root(10);
// this will not be hoisted
// sqrt_n();

// function declaration
function square_root(n) {
  // console.log( Math.sqrt(n));
  console.log("in first squrt fun");
  return;
}

// function expression
var sqrt_n = function () {
  console.log("in second squrt fun");
  return;
};

// array
let arr = ["apple",  "mango",  "mango", "mango"];
arr.unshift("kiwi"); //insert at first
arr.unshift("kiwi"); //insert at first
arr.push("kiwi"); //insert at first
arr.push("kiwi"); //insert at first
arr.pop(); //remove back;
arr.shift(); //remove front
arr.indexOf("Kiwi");
for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}
console.log(arr)


// allow to create object without classes

// one way of creating object-JSON
var bird={
    x:100,
    egg:["one","two","three"],
    fly:function(){
        console.log('flying',this.x)
    }
}

bird.egg.forEach(function(v,idx){
    console.log(idx+1,v)
})

bird.fly()


// 2nd Way
function Fruit(taste,color){
this.taste=taste;
this.color=color;
}

let mango= new Fruit('sweet','yellow')
let orange= new Fruit('sour','orange')


// 3rd way
// class keyword ecmascript 2015




// class declaration -not hoisted
class FruitClass{
    constructor(taste,color){
        this.taste=taste
        this.color=color
    }
}
let kiwi= new FruitClass('sour','green');

// class expression -not hoisted
let FruitClass2= class{
       constructor(taste,color){
        this.taste=taste
        this.color=color
    }
}

let kiwi2= new FruitClass2('sour','green'); //not hoisted

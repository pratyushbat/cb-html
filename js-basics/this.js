

// what does the keyword this means?
// in which places we cannot use this keyword?
// what is closure

// in java
// outside the class 
// and not in stataic methods

// in javascript
// this points to whwre function is called
// and  outside function it can point to global scope like window

function checkThis(){
    console.log(this)
}


// checkThis()

let obj={
    a:10,
    b:'abs',
    c:true,
    d:function(){
        console.log('inside d')
        console.log(this)//pointing to object itself
    },
    e:{
        l:1,
        m:'sxasd',
        n:function(){
              console.log(this)
        }
    }
}

let z=obj.d;
// this is run time bound and check from whre it is called
z(); //point to window

obj.d() //point to obj

obj.e.n();//point to e w



let obj1={a:10,b:20,c:30}
let obj2=Object.create(obj1)
obj2.p='aaca';
obj2.q='aaca';
obj2.r='aaca';
let obj3=Object.create(obj2)
console.log(obj1==obj2)
obj2._proto_==obj1;

// obj3.__proto__ ==obj2
// obj3.__proto__.__proto__ ==obj1
// while reading chain is followed with proto
obj2.a++;
obj2.a= obj2.a+1;
// right side read from proto but not left side right from portoto

var arr1=['asds',1]

// NOTE js2 second video 35 min
// two object can have same proto by type of cannot be same

// let x= Object.create(Boolean.prototype);
// typeof(x) ->Object inheriting from boolean
// typeof(boolean) ->boolean
// but 
// x._proto_ ==== boolean._proto_
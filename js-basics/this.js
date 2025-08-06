

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
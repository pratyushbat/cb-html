function someAsyncTask(callback){
    console.log('begining someasync')
    setTimeout(()=>{
        console.log('end someasync')
        callback();
    },3000);
}

// someAsyncTask(function(){
//     console.log('after completed froom async function')
// })

// promisification -convert async functio to promise
let someTaskPromise=function(){
    return new Promise(function (resolve,reject){
        someAsyncTask(resolve)
    })
}


someTaskPromise().then(function(){
    console.log('after completed')
}).catch(()=>{console.log('error occured')});
someTaskPromise().then(function(){
    console.log('after completed')
}).catch(()=>{console.log('error occured')});



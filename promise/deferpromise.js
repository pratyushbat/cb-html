// promisification -convert async functio to promise
let someTaskPromise = function () {
  return new Promise(function (resolve, reject) {
    console.log("begining someasync");
    setTimeout(() => {
      console.log("end someasync");
      resolve();
    }, 3000);
  });
};

let downloadfile = someTaskPromise();
setTimeout(() => {

  downloadfile
    .then(function () {
      console.log("after completed");
    })
    .catch((err) => {
      console.log("error occured", err);    
    });
}, 5000);

// downloadAsync(function(){
//     console.log('now download done')
// });


setTimeout(() => {
  downloadfile
    .then(function () {
      console.log("after 800 completed");
    })
    .catch((err) => {
      console.log("error occured", err);    
    });
}, 8000);
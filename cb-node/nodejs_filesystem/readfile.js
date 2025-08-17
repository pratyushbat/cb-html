const fs=require('fs');
console.log('1');
fs.readFile(__dirname + '/myfile.txt',(err,data)=>{
 if(err) throw err;
 console.log(data.toString());
 console.log('2');
})
console.log('3');


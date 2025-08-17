const fs=require('fs');
fs.writeFile(__dirname + '/myfile.txt','some data',(err)=>{
 if(err) throw err;
 console.log('file was written')
})
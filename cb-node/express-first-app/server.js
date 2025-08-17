const express=require('express');
const app=express();
var cl=console.log;
app.get('/hello',(req,res)=>{
let name='guest';
console.log(req.query)
    if(req.query.user)
        name=req.query.user;
res.send("Hello world "+name)
})

app.listen(4321,() => {
    console.log("server started on 4321")
})

// mounting public folder on abc path
app.use('/abc',express.static(__dirname +'/public'))
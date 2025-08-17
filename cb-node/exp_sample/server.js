const express = require("express");
const srv = express();
const todoRoute=require('./routes/todos');

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))


srv.get("/hello", (req, res) => {
    res.send("hello world");
});

srv.use('/public',express.static(__dirname+"/public"));

srv.use('/todos',todoRoute);

srv.listen(4567, () => console.log("server staretd on 4567"));
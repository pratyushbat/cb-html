const  User  = require('../../db').User;
const route=require('express').Router();

route.get('/',(req,res)=>{
    console.log('insdie get')
    User.findAll().then((users) => {
        res.status(200).send(users);
    }).catch((err) => {
        res.status(500).send({ 
            error:"Could not retreive user"
        });
    });
})
route.post('/',(req,res)=>{
  User.create({
    name:req.body.name
  }).then((user) => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(500).send({ 
            error:"Could not add the new user"
        });
    });
})

exports=module.exports=route;
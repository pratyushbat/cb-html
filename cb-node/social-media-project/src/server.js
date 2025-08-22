const express= require('express');
const path=require('path');
const {db}=require('./db/model');

const app=express();
// app.use('/',express.static(path.join(__dirname,'public')));

db.sync({force:true}).then((result) => {
  console.log('Database has been synched');
  app.listen(8383,()=>console.log('server started on 8383'))
}).catch((err) => {
    console.error(new Error('could not start db'))
    console.error(err);
});
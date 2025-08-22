const express= require('express');
const path=require('path');
const {db}=require('./db/model');
const {userRoute}=require('./routes/users')
const {postRouter}=require('./routes/posts')

const app=express();
// for post
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/users',userRoute)
app.use('/api/posts',postRouter)
app.use('/',express.static(path.join(__dirname,'/public')));
// db.sync({force:true})
db.sync().then((result) => {
  console.log('Database has been synched');
  app.listen(8383,()=>console.log('server started on 8383'))
}).catch((err) => {
    console.error(new Error('could not start db'))
    console.error(err);
});
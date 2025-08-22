const { Router}= require('express');
const commentRouter=new Router();
commentRouter.get('/',(req,res)=>{
    res.send('TODO: all comments')
})
module.exports={commentRouter}
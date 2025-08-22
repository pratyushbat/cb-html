const { Comments } = require("../db/model");

async function createNewComment(userId,postId, title, body) {
  const comment = Comments.create({
    title,
    body,
    userId,
    postId
  });
  return comment;
}
async function getCommentById(id){
  return await Comments.findOne({where:{id}});
}
async function getCommentByPostId(postid){
  return await Comments.findAll({where:{postid}});
}
async function getCommentByUserPostId(userId,postId){
  return await Comments.findOne({where:{userId,postId}});
}
async function getAllComments(){
  return await Comments.findAll();
}

module.exports = { getAllComments ,getCommentById ,createNewComment ,getCommentByPostId,getCommentByUserPostId};
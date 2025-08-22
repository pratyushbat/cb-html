const { Router } = require("express");
const commentRouter = new Router();
const {
  createNewComment,
  getAllComments,
  getCommentById,
  getCommentByPostId
} = require("../../controllers/comments");

commentRouter.get("/", async (req, res) => {
    console.log('get comment')
  let comments;
  comments = await getAllComments();
  res.status(200).send(comments);
});

commentRouter.post("/", async (req, res) => {
    console.log('posts comment')
    console.log(req.body)
    const { userId,postId, title, body } = req.body;
    if(!userId || !postId || !title || !body){
        return res.status(400).send({error:'Need userid,title body to create post'});
    }
  const posts= await createNewComment(userId,postId,title,body);
  res.status(201).send(posts);
});

commentRouter.get("/:id", async (req, res) => {
  let comment;
  if (isNaN(parseInt(req.params.id))) {
    return res.status(404).send({ error: "id is wrong for comment" });
  } else {
    comment = await getCommentById(req.params.id);
  }
  if (comment) res.status(200).send(comment);
  else res.status(404).send({ error: "no such post comment " });
});
commentRouter.get("/postId/:id", async (req, res) => {
  let comment;
  if (isNaN(parseInt(req.params.id))) {
    return res.status(404).send({ error: "id is wrong for comment" });
  } else {
    comment = await getCommentByPostId(req.params.id);
  }
  if (comment) res.status(200).send(comment);
  else res.status(404).send({ error: "no such post comment " });
});

module.exports = { commentRouter };

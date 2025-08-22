const { Router } = require("express");
const postRouter = new Router();

const { getPostById, findAllPost ,createNewPost } = require("../../controllers/posts");

postRouter.get("/", async (req, res) => {
  let posts;
  posts = await findAllPost();
  res.status(200).send(posts);
});


postRouter.post("/", async (req, res) => {
    console.log(req.body)
    const { userId, title, body } = req.body;
    if(!userId || !title || !body){
        return res.status(400).send({error:'Need userid,title body to create post'});
    }
  const posts= await createNewPost(userId,title,body);
  res.status(201).send(posts);
});


postRouter.get("/:id", async (req, res) => {
  let post;
  if (isNaN(parseInt(req.params.id))) {
    return res.status(404).send({ error: "id is wrong for post" });
  } else {
    post = await getPostById(req.params.id);
  }
  if (post) res.status(200).send(post);
  else res.status(404).send({ error: "no such post id " });
});


module.exports = { postRouter };

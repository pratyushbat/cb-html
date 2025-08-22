const { Posts, Users } = require("../db/model");

async function createNewPost(userId, title, body) {
  const post = Posts.create({
    title,
    body,
    userId,
  });
  return post;
}
async function findAllPost(query) {
  const posts = await Posts.findAll({
    include: [Users],
  });
  return posts;
}

async function getPostById(id){
  return await Posts.findOne({where:{id}});
}

// Test Code
async function task() {
    // console.log(
    //   await createNewPost(
    //     1,
    //     "My cat",
    //     "my puppy cat is very good.he help in all timee and loyal to me"
    //   )
    // );
    // console.log(
    //   await createNewPost(
    //     2,
    //     "My dog",
    //     "my puppy dog is very good.he help in all timee and loyal to me"
    //   )
    // );


  //   const posts = await findAllPost();
  // for (let p of posts) {
  //   console.log(`${p.title} \nauthor: ${p.user.username} \n${p.body} \n`);
  // }
}
// task();


module.exports = { createNewPost ,findAllPost ,getPostById };

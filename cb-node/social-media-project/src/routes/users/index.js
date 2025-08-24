const { Router } = require("express");
const userRoute = new Router();

const {
  createAnonUser,
  createUserbyusername,
  getUserById,
  getUserByUsername,
  getAllUsers,
} = require("../../controllers/users");
// const { User } = require("../../../../sqlexpressshoppingapp/db");

userRoute.get("/", async (req, res) => {
  let users;
  users = await getAllUsers();
  res.status(200).send(users);
});

userRoute.get("/:id", async (req, res) => {
  let user;
  if (isNaN(parseInt(req.params.id))) {
    user = await getUserByUsername(req.params.id);
  } else {
    user = await getUserById(req.params.id);
  }
  console.log(req.params.id);
  console.log(user);
  if (user) res.status(200).send(user);
  else res.status(404).send({ error: "no such user id or username" });
});

userRoute.post("/username", async (req, res) => {
  console.log(req.body);
  const { username } = req.body;
  if (!username) {
    return res
      .status(400)
      .send({ error: "Need userid,title body to create post" });
  }
  const users = await createUserbyusername(username);
  res.status(201).send(users);
});

userRoute.post("/", async (req, res) => {
  const users = await createAnonUser();
  res.status(201).send(users);
});

module.exports = { userRoute };

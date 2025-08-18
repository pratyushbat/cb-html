const route = require("express").Router();
const db = require("../db");
// This route is on /api path
route.get("/persons/", (req, res) => {
  //   send all person as array

//   setTimeout(() => {
    db.getAllPersons()
      .then((persons) => res.send(persons))
      .catch((err) => res.send(err));
//   }, 3000);
});

route.post("/persons/", (req, res) => {
  // add the new person details are in body
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() => res.redirect("/api/persons/"))
    .catch((err) => res.send({ error: err }));
});
exports = module.exports = {
  route,
};

const route = require("express").Router();

let todos = [{ task: "this is first task" }, { task: "another task" }];

route.get("", function (req, res) {
  res.render("todos", { todos });
});

route.post("/", function (req, res) {
    console.log(req.query)
  todos.push({ task: req.body.newTodo });
  console.log('todos',todos)
  res.redirect('todos');
});

module.exports = route;

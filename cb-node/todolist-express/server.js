var cl = console.log;
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine','hbs');
let tasks = [];

app.get("/", (req, res) => {
//   let taskList = tasks.map((t) => `<li>${t}</li>`).join("\n");
//   console.log(tasks);
  res.render(`home`,{title:'Todo List',tasks}  );
});

app.post("/", (req, res) => {
  tasks.push(req.body.newtask);
  res.redirect("/");
});

app.listen(4444, () => console.log("server started on localhost:4444"));

var cl = console.log;
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send('<h1 style="color:red;">hello world</h1>');
});

app.get("/greet", (req, res) => {
  // cl(req.url)  // cl(req.headers)  // cl(req.query)// cl(req)

  let person = "guest";
  if (req.query.person) person = req.query.person;
  res.send("Good Morning " + person);
});

app.post("/greet", (req, res) => {
  let person = "guest";
  cl(req.body);
  if (req.body.person) person = req.body.person;
  res.send("Good Evening " + person);
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.get("/:city/:greeting", (req, res) => {
  console.log(req.params.city);
  res.send(req.params.greeting + " to this city " + req.params.city);
});

app.get("/:person/:action", (req, res) => {
  console.log(req.params.city);
  res.send("Thank you " + req.params.person + " for " + req.params.action);
});

app.listen(4444, () => console.log("server started on localhost:4444"));

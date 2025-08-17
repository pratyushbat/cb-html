const express = require("express");
const app = express();

var cl = console.log;

function m1(req, res, next) {
  cl("m1 pre next");
  next();
  cl("m1 postnext");
}

function m2(req, res, next) {
  cl("m2 pre next");
  next();
  cl("m2 postnext");
}

function m3(req, res, next) {
  cl("m3 pre next");
  next();
  cl("m3 postnext");
}

app.get("/hello", m1, m2, m3, (req, res) => {
  console.log("pre send hellow");
  res.send("hello world");
  console.log("post send hellow");
});
app.listen(4343, () => cl("server staretd on 4343"));

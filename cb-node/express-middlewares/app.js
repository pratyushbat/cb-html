const express = require("express");
const app = express();

function decodeQueryBase64(req, res, next) {
  console.log(req.query);
  for (let q in req.query) {
    let data=req.query[q];
    data=new Buffer(data,'base64').toString('ascii');
    req.query[q] = data;
    
  }
  next();
}

app.get("/eval", decodeQueryBase64, (req, res) => {
    res.send("hello" + req.query.code);
});

app.listen(4545, () => console.log("server staretd on 4545"));

app.use("/", express.static(__dirname + "/public"));

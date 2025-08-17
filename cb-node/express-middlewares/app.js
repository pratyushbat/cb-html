const express = require("express");
const app = express();

swapcase = function swapcase(str) {
    // Use the replace method with a regular expression to match lowercase and uppercase letters separately
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        // For each match, if chr (lowercase letter) exists, convert it to uppercase; otherwise, convert the match (uppercase letter) to lowercase
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}

function decryptData(req, res, next) {
  for (let q in req.query) {
    let data = req.query[q];
    Object.defineProperty(req, "query", {      ...Object.getOwnPropertyDescriptor(req, "query"),      value: req.query,      writable: true,    });
    data = swapcase(data);
    console.log('swapcase: ',data)
    req.query[q] = data;
  }
  next();
}
function decodeQueryBase64(req, res, next) {
  for (let q in req.query) {
    let data = req.query[q];
    data = new Buffer(data, "base64").toString("ascii");
    // Object.defineProperty(req, "query", {      ...Object.getOwnPropertyDescriptor(req, "query"),      value: req.query,      writable: true,    });
    req.query[q] = data;
  }
  next();
}

app.get("/eval",decryptData, decodeQueryBase64, (req, res) => {
  console.log("eval : ", req.query);

  res.send("hello " + req.query.code);
});

app.listen(4545, () => console.log("server staretd on 4545"));

app.use("/", express.static(__dirname + "/public"));

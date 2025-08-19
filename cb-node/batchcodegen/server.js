const express = require("express");
const path = require("path");
const { Center, Season, Course, Batch } = require("./src/model");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.json()); //for post request
app.use(express.urlencoded({ extended: true })); //for post request
console.log(
  "--------------------------------------------------------runnning server.js"
);

app.get("/batchcode", async (req, res) => {
  try {
    const centers = await Center.findAll();
    const seasons = await Season.findAll();
    const courses = await Course.findAll();
    const years = [2017, 2018, 2019, 2020, 2021];
    res.render("batchcode", {
      centers,
      seasons,
      courses,
      years,
    });
  } catch (e) {
    console.log(e);
  }
});
app.post("/batchcode", async (req, res) => {
  let batchcode = "";
  batchcode += req.body.course;
  batchcode += req.body.center;
  batchcode += req.body.year.substr(2);
  batchcode += req.body.season;
  batchcode += req.body.batchno;
//   batchcode += req.body.start;
//   batchcode += req.body.end;
 

  try {
    // console.log(req.body)
    const batch = await Batch.create({
      code: batchcode,
      year: req.body.year,
      courseId: req.body.course,
      centerId: req.body.center,
      seasonId: req.body.season,
      start: Date.parse(req.body.start),
      end: Date.parse(req.body.end),
    });
    res.redirect("/batches")
    //  res.send(batch.code);
  } catch (e) {
    console.log(e);
  }
});


app.get("/batches", async (req, res) => {
  try {
    const batches = await Batch.findAll({
        include:[Course,Season,Center]
    });
    
    res.render("batches", {
      batches,      
    });
  } catch (e) {
    console.log(e);
  }
});


module.exports = { app };

const Sequelize = require("sequelize");
const db = new Sequelize("sampledb2", "sampleuser2", "samplepass2", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("connection worked"))
  .catch((err) => console.log(err));

  module.exports = { db };
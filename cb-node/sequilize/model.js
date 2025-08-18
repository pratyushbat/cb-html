const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const db = new Sequelize("sampledb1", "sampleuser1", "samplepass1", {
  host: "localhost",
  dialect: "mysql",
});

const Student = db.define("student", {
  name: { type: DataTypes.STRING(40), allowNull: false },
  age: { type: DataTypes.INTEGER(20), allowNull: false, default: -1 },
});



// force will delete existing data
// db.sync({force:true})
//   .then(() => console.log("db sync"))
//   .catch(console.error);

db.sync({ alter: true })
  .then(() => console.log("db sync"))
  .catch(console.error);


  module.exports={db,Student};
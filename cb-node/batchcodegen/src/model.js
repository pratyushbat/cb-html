const { DataTypes } = require('sequelize');
const { db } = require('./connection');

const Course = db.define('course', {
  id: { type: DataTypes.STRING(2), primaryKey: true },
  name: { type: DataTypes.STRING(20) },
});

const Center = db.define('center', {
  id: { type: DataTypes.STRING(2), primaryKey: true },
  name: { type: DataTypes.STRING(20), allowNull: false },
  city: { type: DataTypes.STRING(20), allowNull: false },
});

const Season = db.define('season', {
  id: { type: DataTypes.STRING(2), primaryKey: true },
  name: { type: DataTypes.STRING(10), allowNull: false },
});

const Batch = db.define('batch', {
  code: { type: DataTypes.STRING(8), primaryKey: true },
  start: { type: DataTypes.DATE },
  end: { type: DataTypes.DATE },
});
const Teacher = db.define('teacher', {
  id: { type: DataTypes.STRING(2), primaryKey: true },
  name: { type: DataTypes.STRING(35), allowNull: false },
});

Batch.belongsTo(Course);
Batch.belongsTo(Center);
Batch.belongsTo(Season);

Course.hasMany(Batch);
Center.hasMany(Batch);
Season.hasMany(Batch);
console.log('-----------------running db ---------------------')
db.sync();

module.exports = { db, Center, Course, Season, Batch, Teacher };

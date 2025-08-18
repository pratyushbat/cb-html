const { db, Student } = require("./model");
const { Op } = require('sequelize')
const task = async () => {
  try {
    await db.sync();
    const students = await Student.findAll({
    //   where: {age: {$gt: 12 }},
          where: {
            age: {
              [ Op.gt]: 15
             }
            },
        order:[['age','desc']]
    });
    // console.log(students);
    students.forEach((student) => {
      console.log(
        `name: ${student.dataValues.name} \t age: ${student.dataValues.age} `
      );
    });
  } catch (e) {
    console.log(e);
  }
};
task();

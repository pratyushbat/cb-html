const {db,Student}=require('./model');

const task = async () => {
  try {
    await db.sync();
    await Student.create({
        name:(['Tom','Dick','Harry','John','Karen','Peter','Parker','Spider','Tessa','Ben'])[parseInt(Math.random()*10)],
        age:10+parseInt(Math.random()*10)});
  } catch (e) {
    console.log(e);
  }
};
task();
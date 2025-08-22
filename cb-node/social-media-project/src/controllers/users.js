const { Users } = require("../db/model");
const { genRandomUsername } = require("../utils/username");

function createAnonUser() {
  const user = Users.create({
    username: genRandomUsername(),
  });
  return user;
}

module.exports = { createAnonUser };


// Test code

// async function task(){
//  console.log(   await createAnonUser());
//  console.log('---------------------')
//  console.log(   await createAnonUser());
//  console.log('---------------------')
//  console.log(   await createAnonUser());
//  console.log('---------------------')
//  console.log(   await createAnonUser());
// }
// task()


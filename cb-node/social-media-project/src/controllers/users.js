const { Users } = require("../db/model");
const { genRandomUsername } = require("../utils/username");

function createAnonUser() {
  const user = Users.create({
    username: genRandomUsername(),
  });
  return user;
}
function createUserbyusername(username) {
  const user = Users.create({
    username
  });
  return user;
}

async function getUserById(id){
  return await Users.findOne({where:{id}});
}
async function getAllUsers(id){
  return await Users.findAll();
}
async function getUserByUsername(username){
  return await Users.findOne({where:{username}});
}

module.exports = { getAllUsers,createAnonUser ,getUserById,getUserByUsername ,createUserbyusername};


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


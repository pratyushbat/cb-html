const { MongoClient } = require("mongodb");

const MONGO_URL = "mongodb://localhost:27017";


// Database Name
const DB_NAME = "tododb";

async function writeTask() {
  // Use connect method to connect to the server
  const client = await MongoClient.connect(MONGO_URL);
//   await client.connect();
  console.log("Connected successfully to server");
  const todoDb = client.db(DB_NAME);
  const todos = todoDb.collection("todos");
  const todo = {
    task: "an important task",
    priority: 2,
    owner: "manager",
  };
const result= await todos.insertMany([
    { task: "Write FormData in list ",    owner: "employee"},
    { task: "Write FormData in list without importance", priority: 0,    owner: "executive"},
    { task: "To read book", priority: 1,    owner: "executive"},
    { task: "To write code ",    owner: "executive"},
    { task: "Fix bug  ", priority: 3,    owner: "executive"},
    { task: "Make sales pitch", priority: 2,    owner: "CEO"},
]);
    console.log(result)

  // the following code examples can be pasted here...

 
}

writeTask();
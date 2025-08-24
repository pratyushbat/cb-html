const { MongoClient } = require("mongodb");

const MONGO_URL = "mongodb://localhost:27017";

// Database Name
const DB_NAME = "tododb";

async function readTask() {
  // Use connect method to connect to the server
  const client = await MongoClient.connect(MONGO_URL);
  //   await client.connect();
  console.log("Connected successfully to server");
  const todoDb = client.db(DB_NAME);
  const todos = todoDb.collection("todos");

  const todoArray = await todos
    .find({
      // priority:{$gt:1  },
      // owner: { $regex: "^e" },
      // $and: [{ priority: { $gt: 0 } }, { priority: { $lt: 2 } }],
      // $or: [{ priority: { $gte: 0 } }, { priority: { $lt: 2 } }],
      priority:{$exists:true }
      // priority:{$in:[0] }
    })
    .sort({priority:-1})
    .toArray();
  todoArray.forEach((todo) => console.log(JSON.stringify(todo)));

  // the following code examples can be pasted here...
}

readTask();

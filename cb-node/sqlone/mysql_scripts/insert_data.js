const mysql = require("mysql2");

const insert = {
  name: process.argv[2],
  age: parseInt(process.argv[3]),
  city: process.argv[4]
};
const conn = mysql.createConnection({
  host: "localhost",
  database: "mytestdb",
  user: "myuser",
  password: "mypass",
});

conn.query(
  ` INSERT INTO persons (name, age, city) VALUES(
            '${insert.name}' ,  
            ${insert.age},
            '${insert.city}'
    ) `,
  (err, res) => {
    if (err) console.log(err);
    else{
        console.log("res:", res);
        console.log("results created successfully");
    } 
    conn.close();
  }
);

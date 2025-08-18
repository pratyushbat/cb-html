const mysql = require("mysql2");


const conn = mysql.createConnection({
  host: "localhost",
  database: "mytestdb",
  user: "myuser",
  password: "mypass",
});

conn.query(
  ` SELECT * FROM persons`,
  (err,rows, field) => {
    if (err) console.log(err);
    else{
        console.log("rows:", rows);
        console.log("field:", field);        
    } 
    conn.close();
  }
);

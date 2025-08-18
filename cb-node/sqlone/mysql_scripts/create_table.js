const mysql = require('mysql2');
const conn =  mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password:'mypass'
  });

  conn
  .query(
    `CREATE TABLE IF NOT EXISTS persons(
    id INTEGER auto_increment PRIMARY KEY  ,
    name VARCHAR(40) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(30)
    )`,
    (err,results) => {
    if(err)
        console.log(err)
    else
    console.log('table created successfully');

    conn.close();
  }
  
  );
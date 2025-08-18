const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  database: "mytestdb",
  user: "myuser",
  password: "mypass",
});

function getAllPersons() {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM persons`, (err, rows, cols) => {
      if (err) reject(err);
      else {
        resolve(rows);
      }
    });
  });
}

function addNewPerson(name, age, city) {
  return new Promise((resolve, reject) => {
    conn.query(
      ` INSERT INTO persons (name, age, city) VALUES(?,?,?) `,
      [name, age, city],
      (err, rows, cols) => {
        if (err) reject(err);
        else {
          resolve(rows);
        }
      }
    );
  });
}

exports = module.exports = {
  getAllPersons,addNewPerson
};

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'cv'
});

db.connect(err => {
  if (err) {
    console.error('Kết nối MySQL thất bại: ', err);
  } else {
    console.log('Kết nối MySQL thành công');
  }
});

const getAll = (table, callback) => {
  const sql = `SELECT * FROM ??`;
  db.query(sql, [table], (err, results) => {
    callback(err, results);
  });
};

const getById = (table, id, callback) => {
  const sql = `SELECT * FROM ?? WHERE id = ?`;
  db.query(sql, [table, id], (err, results) => {
    callback(err, results);
  });
};



const insert = (table, data, callback) => {
  const sql = `INSERT INTO ?? SET ?`;
  db.query(sql, [table, data], (err, results) => {
    callback(err, results);
  });
};

const update = (table, data, id, callback) => {
  const sql = `UPDATE ?? SET ? WHERE ?`;
  db.query(sql, [table, data, id], (err, results) => {
    callback(err, results);
  });
};

const Delete = (table, id, callback) => {
  const sql = `DELETE FROM ?? WHERE ?`;
  db.query(sql, [table, id], (err, results) => {
    callback(err, results);
  });
};




module.exports = {
  getAll,
  insert,
  update,
  Delete,
  getById,
  db
};
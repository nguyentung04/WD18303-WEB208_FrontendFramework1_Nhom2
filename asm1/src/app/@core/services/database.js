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

const getByID = (table, id, callback) => {
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
  const sql = `UPDATE ?? SET ? WHERE id = ?`;
  db.query(sql, [table, data, id], (err, results) => {
    callback(err, results);
  });
};




const Delete = (table, id, callback) => {
  console.log(`Deleting from table: ${table}, id: ${id}`);
  const sql = `DELETE FROM ?? WHERE id = ?`;
  db.query(sql, [table, id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('Query results:', results);
    }
    callback(err, results);
  });
};

const getAllSkillsByUserId = (callback) => {
  const sql = `
    SELECT 
        user_id,
        GROUP_CONCAT(skill SEPARATOR ',') AS kynang
    FROM
        skill
    GROUP BY user_id
  `;

  db.query(sql, (err, results) => {
    callback(err, results);
  });
}

module.exports = {
  getAll,
  insert,
  update,
  Delete,
  getByID,
  getAllSkillsByUserId,
  db
};

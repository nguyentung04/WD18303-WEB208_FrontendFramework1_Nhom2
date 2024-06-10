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

const getAllCV = (callback) => {
  const sql = `SELECT 
  userinfo.*, 
  language.*, 
  skill.*, 
  experience.*, 
  education.*, 
  activity.*, 
  informationtechnologyexperience.*, 
  certificate.*
FROM userinfo
LEFT JOIN language ON userinfo.id = language.user_id
LEFT JOIN skill ON userinfo.id = skill.user_id
LEFT JOIN recruitment ON userinfo.id = recruitment.user_id
LEFT JOIN experience ON userinfo.id = experience.user_id
LEFT JOIN education ON userinfo.id = education.user_id
LEFT JOIN activity ON userinfo.id = activity.user_id
LEFT JOIN informationtechnologyexperience ON userinfo.id = informationtechnologyexperience.user_id
LEFT JOIN certificate ON userinfo.id = certificate.user_id`;
  db.query(sql, (err, results) => {
    callback(err, results);
  });
};


const getAllCVByID = (callback, id) => {
  const sql = `
  SELECT 
  userinfo.*, 
  language.*,
  language.level as language_level,
  skill.*,
  recruitment.*,
  experience.*, 
  DATE_FORMAT(experience.startdate, '%d/%m/%Y') AS start_date,
  DATE_FORMAT(experience.enddate, '%d/%m/%Y') AS end_date,
  education.*,
  education.name as edu_name,
  YEAR(education.startTime) AS start_year,
  YEAR(education.endTime) AS end_year,
  activity.*, 
  informationtechnologyexperience.*, 
  informationtechnologyexperience.level as info_level,
  certificate.*
FROM userinfo
LEFT JOIN language ON userinfo.id = language.user_id
LEFT JOIN skill ON userinfo.id = skill.user_id
LEFT JOIN recruitment ON userinfo.id = recruitment.user_id
LEFT JOIN experience ON userinfo.id = experience.user_id
LEFT JOIN education ON userinfo.id = education.user_id
LEFT JOIN activity ON userinfo.id = activity.user_id
LEFT JOIN informationtechnologyexperience ON userinfo.id = informationtechnologyexperience.user_id
LEFT JOIN certificate ON userinfo.id = certificate.user_id
WHERE userinfo.id = ?
`;
  db.query(sql, [id], (err, results) => {
    callback(err, results);
  });
};

const getByID = (table, id, callback) => {
  const sql = `SELECT * FROM ?? WHERE ?`;
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

const DeleteSkill = (callback, id) => {
  const sql = `DELETE FROM skill WHERE user_id = ?`;
  db.query(sql, [id], (err, results) => {
    callback(err, results);
  });
};


module.exports = {
  getAll,
  insert,
  update,
  Delete,
  getByID,
  getAllCV,
  getAllCVByID,
  DeleteSkill,
  db
};

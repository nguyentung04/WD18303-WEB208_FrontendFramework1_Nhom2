const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const { getAll, insert, update, Delete, getByID,getAllSkillsByUserId } = require('./database');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../../assets/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage:storage });




const tables = ['userinfo','skill', 'certificate', 'certificate', 'categories', 'suppliers', 'employees', 'shippers', 'regions', 'territories'];


tables.forEach(table => {
  app.get(`/api/${table}`, (req, res) => {
    getAll(table, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  app.get(`/api/${table}/:id`, (req, res) => {
    const id = req.params.id;
    getByID(table, id, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.json(results[0]);
    });
  });
  



  app.post(`/api/${table}`, (req, res) => {
    insert(table, req.body, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: `Thêm vào ${table} thành công`, id: result.insertId });
    });
  });
  //
  app.post(`/api/${table}/upload`, upload.single('img'), (req, res) => {
    if (!req.file) {
      return res.status(200).json({ error: 'không thể up hình' });
    }
  
    const file = req.file;
    insert(table, { ...req.body, imagePath: file.filename }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: `up ảnh thành công`, id: result.insertId });
    });
  });

  app.put(`/api/${table}/:id`, (req, res) => {
    const { id } = req.params;
    update(table, req.body, { id }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: `Cập nhật ${table} thành công` });
    });
  });

  app.get('/api/skill', (req, res) => {
    getAllSkillsByUserId((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });
  


  app.delete(`/api/${table}/:id`, (req, res) => {
    const { id } = req.params;
    Delete(table, { id }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: `Xóa ${table} thành công` });
    });
  });
});





app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});

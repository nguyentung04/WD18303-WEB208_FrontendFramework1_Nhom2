const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { getAll, insert,update,Delete } = require('./database');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const tables = ['userinfo', 'skill', 'orders', 'customers', 'categories', 'suppliers', 'employees', 'shippers', 'regions', 'territories'];


tables.forEach(table => {
  app.get(`/api/${table}`, (req, res) => {
    getAll(table, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  app.post(`/api/${table}`, (req, res) => {
    insert(table, req.body, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: `Thêm vào ${table} thành công`,id: result.insertId });
    });
  });

  app.put(`/api/${table}/:id`, (req, res) => {
    const { id } = req.params;
    update(table, req.body, { id }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: `Cập nhật ${table} thành công`});
    });
  });

  app.delete(`/api/${table}/:id`, (req, res) => {
    const { id } = req.params;
    Delete(table, { id }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: `Xóa ${table} thành công`});
    });
  });
});

 



app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});

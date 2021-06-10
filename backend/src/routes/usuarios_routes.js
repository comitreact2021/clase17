const express = require('express');
const conexion = require('../connection');

const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM usuarios';

  conexion.query(sql, (error, result) => {
    if (error) {
      res.send('Error al obtener los usuarios');
    } else {
      res.json(result);
    }
  });
});

module.exports = router;

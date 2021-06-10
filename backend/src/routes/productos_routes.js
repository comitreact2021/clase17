const express = require('express');
const conexion = require('../connection');

const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM productos';

  conexion.query(sql, (error, result) => {
    if (error) {
      res.send('Error al obtener los productos');
    } else {
      res.json(result);
    }
  });
});

//Los : (dos puntos), significa que es una variable (Parametro)
router.get('/:id', (req, res) => {
  const sql = `SELECT *
     FROM productos
     WHERE id = ${req.params.id}`;

  conexion.query(sql, (error, result) => {
    if (error) {
      res.send('Error al obtener el producto');
    } else {
      res.json(result);
    }
  });
});

module.exports = router;

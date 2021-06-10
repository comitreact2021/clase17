const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactmendoza',
});

conexion.connect((err) => {
  if (err) {
    console.log('Error al conectarse a la bd');
  } else {
    console.log('Conectado a la BD exitosamente');
  }
});

function saludar() {
  console.log('Hello world!!');
}

module.exports = conexion;

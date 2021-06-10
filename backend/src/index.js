const express = require('express');
const cors = require('cors');

//RUTAS
const productosRoutes = require('./routes/productos_routes');
const usuariosRoutes = require('./routes/usuarios_routes');

const app = express();

app.use(cors());

app.use('/productos', productosRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(8000, () => {
  console.log('Servidor iniciado...');
});

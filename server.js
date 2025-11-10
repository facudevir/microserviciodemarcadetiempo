// server.js
const express = require('express');
const app = express();

// Servir archivos estáticos (opcional, para compatibilidad con el boilerplate original)
app.use(express.static('public'));

// Ruta raíz (sirve el index.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Endpoint principal del microservicio
app.get('/api/:date?', (req, res) => {
  const { date } = req.params;
  let dateObj;

  if (!date) {
    // Sin parámetro -> fecha actual
    dateObj = new Date();
  } else if (/^\d+$/.test(date)) {
    // Si es un númer



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


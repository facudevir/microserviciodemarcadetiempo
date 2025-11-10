// server.js
const express = require('express');
const app = express();

// Servir archivos estáticos (para compatibilidad con el boilerplate original)
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
    // Si es un número (timestamp)
    let ts = parseInt(date, 10);
    // Si tiene 10 dígitos, es en segundos → convertir a milisegundos
    if (date.length === 10) ts *= 1000;
    dateObj = new Date(ts);
  } else {
    // Si es una cadena tipo "2015-12-25"
    dateObj = new Date(date);
  }

  // Validar fecha
  if (isNaN(dateObj.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }

  // Respuesta esperada por freeCodeCamp
  return res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString(),
  });
});

// 👇 Esta parte estaba faltando
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});



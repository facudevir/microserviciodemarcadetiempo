// server.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('Timestamp Microservice - Endpoint: /api/timestamp/:date?');
});

// Ruta principal
app.get('/api/timestamp/:date?', (req, res) => {
  const { date } = req.params;

  // Si no se pasa fecha, usar la fecha actual
  if (!date) {
    const now = new Date();
    return res.json({ unix: now.getTime(), utc: now.toUTCString() });
  }

  let parsedDate;

  // Si es un número (solo dígitos)
  if (/^\d+$/.test(date)) {
    let timestamp = parseInt(date, 10);
    // Si tiene 10 dígitos, convertir segundos a milisegundos
    if (date.length === 10) {
      timestamp *= 1000;
    }
    parsedDate = new Date(timestamp);
  } else {
    // Si no, intentar parsear como fecha normal
    parsedDate = new Date(date);
  }

  // Validar si la fecha es inválida
  if (isNaN(parsedDate.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Respuesta correcta
  return res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

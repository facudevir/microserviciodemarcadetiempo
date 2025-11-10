// server.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Timestamp Microservice - Endpoint: /api/:date?");
});

// Endpoint ajustado para freeCodeCamp
app.get("/api/:date?", (req, res) => {
  const date = req.params.date;
  let dateObj;

  if (!date) {
    // Sin parámetro -> fecha actual
    dateObj = new Date();
  } else {
    // Si contiene solo dígitos -> timestamp
    if (/^\d+$/.test(date)) {
      // Convertir a entero
      let ts = parseInt(date, 10);
      // Si es un timestamp de 10 dígitos (segundos), convertir a ms
      if (date.length === 10) ts *= 1000;
      dateObj = new Date(ts);
    } else {
      // Si es una cadena de fecha (ej: 2015-12-25)
      dateObj = new Date(date);
    }
  }

  // Validación
  if (isNaN(dateObj.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Respuesta esperada
  return res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


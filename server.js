// server.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Timestamp Microservice - Endpoint: /api/:date?");
});

// Ruta principal (ajustada para freeCodeCamp)
app.get("/api/:date?", (req, res) => {
  const { date } = req.params;

  let dateObj;

  // Si no se pasa parámetro, usar la fecha actual
  if (!date) {
    dateObj = new Date();
  } else if (/^\d+$/.test(date)) {
    // Si la fecha son solo números, interpretarlo como timestamp Unix
    const timestamp = parseInt(date, 10);
    dateObj = new Date(timestamp);
  } else {
    // Si es una fecha tipo "2015-12-25"
    dateObj = new Date(date);
  }

  // Si la fecha no es válida
  if (dateObj.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Respuesta válida
  res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString(),
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


# Timestamp Microservice

Proyecto del curso **Back End Development and APIs** de freeCodeCamp.

## 🧾 Descripción
Microservicio que recibe una fecha (o ninguna) y devuelve su representación en formato Unix y UTC.  
Si la fecha es inválida, responde con `{ "error": "Invalid Date" }`.

---

## ⚙️ Cómo ejecutar localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/timestamp-microservice.git
   cd timestamp-microservice
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor:
   ```bash
   npm start
   ```

4. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

---

## 🧠 Endpoints disponibles

### `GET /api/timestamp`
Devuelve la fecha actual.
```json
{
  "unix": 1730832000000,
  "utc": "Wed, 06 Nov 2025 00:00:00 GMT"
}
```

### `GET /api/timestamp/:date`
- Si `:date` es una fecha válida (`YYYY-MM-DD` o timestamp numérico):  
  ```json
  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }
  ```

- Si `:date` no es válida:  
  ```json
  { "error": "Invalid Date" }
  ```

---

## 🧪 Ejemplos de uso

| Endpoint | Descripción | Respuesta esperada |
|-----------|-------------|--------------------|
| `/api/timestamp/2015-12-25` | Fecha ISO | `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }` |
| `/api/timestamp/1451001600000` | Timestamp en milisegundos | `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }` |
| `/api/timestamp/1451001600` | Timestamp en segundos | `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }` |
| `/api/timestamp` | Fecha actual | Fecha actual en ambos formatos |
| `/api/timestamp/invalid-date` | Fecha inválida | `{ error: "Invalid Date" }` |

---

## 🚀 Despliegue

Podés subirlo fácilmente a:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Vercel](https://vercel.com/)
- [Glitch](https://glitch.com/)
- [Heroku (Legacy)](https://www.heroku.com/)

Solo asegurate de usar `process.env.PORT` (ya incluido).

---

## 🧩 Autor
Proyecto de práctica de **Facundo de Virgilio** para el curso de *Back End Development and APIs* de freeCodeCamp.

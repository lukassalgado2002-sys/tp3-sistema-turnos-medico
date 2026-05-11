## Avance realizado

Hasta el momento se realizó la instalación y configuración inicial del proyecto.

Se instaló Node.js y se inicializó el proyecto con npm. También se instaló Express 4 junto con las dependencias pg, dotenv, jsonwebtoken y bcryptjs.

Se creó una estructura de carpetas organizada con db, controllers, routes, middleware y public. Además, se configuró el archivo server.js y la conexión a PostgreSQL mediante el archivo db/index.js usando variables de entorno desde .env.

En PostgreSQL se creó una base de datos nueva llamada tp3_programacion_Salgado. Dentro de ella se crearon cuatro tablas relacionadas: usuarios, medicos, pacientes y turnos.

También se cargaron datos de prueba en las tablas medicos, pacientes y turnos. Se comprobó el funcionamiento mediante consultas SELECT desde pgAdmin.

Por último, se creó un procedimiento almacenado llamado registrar_turno, que permite registrar un turno verificando antes que el médico no tenga otro turno en la misma fecha y hora.
ultimo avance:
# Sistema de Turnos Médicos

Trabajo Práctico N°3 realizado para la materia Programación III.

La aplicación fue desarrollada con Node.js, Express y PostgreSQL.  
El sistema permite registrar usuarios, iniciar sesión y acceder a una ruta protegida utilizando autenticación JWT.

---

# Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- JWT
- bcryptjs
- HTML
- CSS
- JavaScript

---

# Funcionalidades

- Registro de usuarios
- Inicio de sesión
- Contraseñas encriptadas
- Generación de token JWT
- Ruta protegida
- Conexión con PostgreSQL
- Interfaz visual para el usuario

---

# Estructura del proyecto

```bash
controllers/
db/
middleware/
public/
routes/

server.js
database.sql
package.json
README.md
```

---

# Instalación

## Instalar dependencias

```bash
npm install
```

---

## Configurar variables de entorno

Crear un archivo `.env`

Ejemplo:

```env
PORT=3000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=turnos_medicos
DB_PASSWORD=1234
DB_PORT=5432

JWT_SECRET=secretojwt
```

---

## Ejecutar servidor

```bash
node server.js
```

---

# Endpoints principales

## Registro

```http
POST /api/auth/register
```

## Login

```http
POST /api/auth/login
```

## Ruta protegida

```http
GET /api/turnos/privado
```

---

# Base de datos

El proyecto incluye:

- Tablas relacionadas
- Trigger
- Stored Procedure
- Transacción con ROLLBACK

Todo se encuentra en el archivo `database.sql`.

---

# Interfaz visual

La aplicación cuenta con una interfaz sencilla realizada en HTML, CSS y JavaScript para probar el funcionamiento del sistema.

---

# Autor

Lukas Salgado  
Tecnicatura en Programación  
2026
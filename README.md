## Avance realizado

Hasta el momento se realizó la instalación y configuración inicial del proyecto.

Se instaló Node.js y se inicializó el proyecto con npm. También se instaló Express 4 junto con las dependencias pg, dotenv, jsonwebtoken y bcryptjs.

Se creó una estructura de carpetas organizada con db, controllers, routes, middleware y public. Además, se configuró el archivo server.js y la conexión a PostgreSQL mediante el archivo db/index.js usando variables de entorno desde .env.

En PostgreSQL se creó una base de datos nueva llamada tp3_programacion_Salgado. Dentro de ella se crearon cuatro tablas relacionadas: usuarios, medicos, pacientes y turnos.

También se cargaron datos de prueba en las tablas medicos, pacientes y turnos. Se comprobó el funcionamiento mediante consultas SELECT desde pgAdmin.

Por último, se creó un procedimiento almacenado llamado registrar_turno, que permite registrar un turno verificando antes que el médico no tenga otro turno en la misma fecha y hora.
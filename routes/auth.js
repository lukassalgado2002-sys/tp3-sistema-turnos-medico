const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);

        const result = await pool.query(
            "INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING id, nombre, email",
            [nombre, email, passwordHash]
        );

        res.json({
            mensaje: "Usuario registrado correctamente",
            usuario: result.rows[0]
        });

    } catch (error) {
        res.status(500).json({ error: "Error al registrar usuario" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(400).json({ error: "Email o contraseña incorrectos" });
        }

        const usuario = result.rows[0];

        const passwordCorrecta = await bcrypt.compare(password, usuario.password);

        if (!passwordCorrecta) {
            return res.status(400).json({ error: "Email o contraseña incorrectos" });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            mensaje: "Login correcto",
            token
        });

    } catch (error) {
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
});

module.exports = router;
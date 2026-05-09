const express = require("express");
const pool = require("./db");
const authRoutes = require("./routes/auth");
const turnosRoutes = require("./routes/turnos");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRoutes);
app.use("/api/turnos", turnosRoutes);

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            mensaje: "Servidor y PostgreSQL funcionando",
            fecha: result.rows[0]
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error conectando PostgreSQL"
        });
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000");
});
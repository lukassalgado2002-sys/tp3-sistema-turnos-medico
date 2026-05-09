const express = require("express");
const verificarToken = require("../middleware/auth");

const router = express.Router();

router.get("/privado", verificarToken, (req, res) => {
    res.json({
        mensaje: "Ruta privada funcionando",
        usuario: req.usuario
    });
});

module.exports = router;
const { Router } = require('express');
const Types = require('../controllers/type');
const pokemon = require("./pokemon.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js')
const types = new Types();

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons",pokemon);
router.get('/a',types.getTypes);

module.exports = router;

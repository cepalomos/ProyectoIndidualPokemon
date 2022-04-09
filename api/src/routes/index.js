const { Router } = require('express');
const Pokemon = require('../controllers/pokemon');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js')
const pokemon = new Pokemon();

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/",pokemon.getPokemon)

module.exports = router;

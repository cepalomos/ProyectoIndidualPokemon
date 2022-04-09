const {Router} = require('express');
const router = Router();
const Pokemon = require('../controllers/pokemon');
const pokemon = new Pokemon();


router.route("/").get(pokemon.getPokemon)


module.exports=router;
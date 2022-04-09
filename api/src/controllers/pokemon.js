const { getApiPokemon, getDbPokemon } = require("../adapter/pokemon.js");

class Pokemon {
  async getPokemon(req, res, next) {
    try {
      let pokemonsApi = await getApiPokemon();
      let pokemonsDb = await getDbPokemon();
      let pokemons = [...pokemonsApi, ...pokemonsDb];
      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Pokemon;

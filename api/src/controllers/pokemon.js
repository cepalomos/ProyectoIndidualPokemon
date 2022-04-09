const { getApiPokemon, getDbPokemon,getApiName,getDbName } = require("../adapter/pokemon.js");

class Pokemon {
  async getPokemon(req, res, next) {
      const {name} = req.query;
    try {
        if(name){
            let dataDb = await getDbName(name);
            if(dataDb) return res.json(dataDb);
            let dataApi = await getApiName(name);
            if(dataApi) return res.json(dataApi);
            throw new Error(({status:404,message:"no encontrado"}));
        }
      let pokemonsApi = await getApiPokemon();
      let pokemonsDb = await getDbPokemon();
      let pokemons = [...pokemonsApi, ...pokemonsDb];
      res.status(200).json(pokemons);
    } catch (error) {
        console.error(error.status);
      next(error);
    }
  }
}

module.exports = Pokemon;

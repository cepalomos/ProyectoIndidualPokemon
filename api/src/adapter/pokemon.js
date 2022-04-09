const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

async function getApiPokemon() {
  try {
    const {
      data: { results: mid, next },
    } = await axios("https://pokeapi.co/api/v2/pokemon");
    const {
      data: { results: final },
    } = await axios(next);
    const datos = [...mid, ...final];
    const pokemons = await Promise.all(
      datos.map(({ url }) => {
        return new Promise((resolve, reject) => {
          axios(url)
            .then(
              ({
                data: {
                  id,
                  name,
                  types: typesApi,
                  sprites: {
                    other: {
                      dream_world: { front_default: imagen },
                    },
                  },
                },
              }) => {
                const types = typesApi.map((el) => el.type.name);
                resolve({ id, name, types, imagen });
              }
            )
            .catch((error) => reject(error));
        });
      })
    );
    return pokemons;
  } catch (error) {
    throw new Error(error);
  }
}

async function getDbPokemon() {
  try {
    let pokemons = await Pokemon.findAll({
      attributes: ["id", "name"],
      include: {
        model: Type,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return pokemons;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getApiPokemon, getDbPokemon };

import axios from "axios";

export default class Navigator {
  async pokemonName(name) {
    try {
      const {data} = await axios(`localhost:3001/pokemons?name=${name}`)
      if (data) {
          return data;
      }
    } catch (error) {
        alert("En ese pokemon no existe en nuestro");
    }
  }
}

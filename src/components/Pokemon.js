import axios from "axios";

export const getPokemon = (number) => {
  const response = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((response) => response.data);
  return response;
};

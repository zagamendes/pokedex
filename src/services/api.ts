import axios from "axios";
import { Pokemon } from "../types/pokemon";
import { PokemonResponse } from "../types/pokemonResponse";
export const api = axios.create({ baseURL: "https://pokeapi.co/api/v2" });
export const pokemonService = {
  searchPokemon: async (id: string) => {
    const { data } = await api.get<Pokemon>(`/pokemon/${id}`);
    return data;
  },
  getPokemon: async () => {
    const {
      data: { results },
      data: { next, previous },
    } = await api.get<PokemonResponse>("/pokemon");
    const pokemonInfoPromise = results.map((currentPokemon) => {
      return api.get<Pokemon>(`/pokemon/${currentPokemon.name}`);
    });

    const response = await Promise.all(pokemonInfoPromise);
    const pokemonInfo = response.map((pokemon) => pokemon.data);
    return { pokemonInfo, next, previous };
  },
  nextPage: async (page: string) => {
    const {
      data: { results },
      data: { next, previous },
    } = await axios.get<PokemonResponse>(page);
    const pokemonInfoPromise = results.map((currentPokemon) => {
      return api.get<Pokemon>(`/pokemon/${currentPokemon.name}`);
    });
    const response = await Promise.all(pokemonInfoPromise);
    const pokemonInfo = response.map((pokemon) => pokemon.data);
    return { pokemonInfo, next, previous };
  },
  previousPage: async (page: string) => {
    const {
      data: { results },
      data: { next, previous },
    } = await axios.get<PokemonResponse>(page);
    const pokemonInfoPromise = results.map((currentPokemon) => {
      return api.get<Pokemon>(`/pokemon/${currentPokemon.name}`);
    });
    const response = await Promise.all(pokemonInfoPromise);
    const pokemonInfo = response.map((pokemon) => pokemon.data);
    return { pokemonInfo, next, previous };
  },
};

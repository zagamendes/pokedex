import React, { useState } from "react";

import { createContext } from "react";
import { Pokemon } from "../types/pokemon";

interface PokemonContextProps {
  pokemons: Pokemon[];
  setPokemon: (_: Pokemon[]) => void;
  searchedPokemon: Pokemon | null;
  setSearchedPokemon: (_: Pokemon | null) => void;
  next: string | null;
  previous: string | null;
  setNext: (_: string) => void;
  setPrevious: (_: string) => void;
}
export const pokemonContext = createContext<PokemonContextProps>(
  {} as PokemonContextProps
);
const PokemonProvider: React.FC<any> = ({ children }) => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [searchedPokemon, setSearchedPokemon] = useState<Pokemon | null>(null);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  return (
    <pokemonContext.Provider
      value={{
        pokemons,
        setPokemon,
        searchedPokemon,
        setSearchedPokemon,
        next,
        setNext,
        previous,
        setPrevious,
      }}
    >
      {children}
    </pokemonContext.Provider>
  );
};

export default PokemonProvider;

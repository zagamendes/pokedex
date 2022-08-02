import React, { useContext, useEffect } from "react";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/Pagination/Pagination";
import { pokemonContext } from "../contextos/Pokemon";
import { pokemonService } from "../services/api";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { pokemons, setPokemon, setNext, setPrevious } =
    useContext(pokemonContext);
  useEffect(() => {
    pokemonService.getPokemon().then(({ pokemonInfo, next, previous }) => {
      setPokemon(pokemonInfo);
      setNext(next);
      setPrevious(previous);
    });
  }, []);

  if (pokemons.length == 0) return <Loading />;
  return (
    <div className="App">
      <Modal />
      <div className="d-flex flex-column align-items-center">
        <Pagination />
        <div className="d-flex flex-row mt-4 flex-wrap justify-content-between">
          {pokemons.map((currentPokemon) => (
            <Card pokemon={currentPokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import Modal from "../components/Modal/Modal";
import { pokemonContext } from "../contextos/Pokemon";
import { pokemonService } from "../services/api";

// import { Container } from './styles';
interface ErrorProps {
  fail: boolean;
  message: string;
}
const SearchedPokemon: React.FC<any> = () => {
  const { searchedPokemon, setSearchedPokemon } = useContext(pokemonContext);
  const [error, setError] = useState<ErrorProps>({ fail: false, message: "" });
  const { id } = useParams();
  useEffect(() => {
    pokemonService
      .searchPokemon(id as string)
      .then((pokemon) => {
        setSearchedPokemon(pokemon);
      })
      .catch((e) => {
        console.log(e);

        setError({
          fail: true,
          message:
            e.response.status == 404
              ? "Pokemon não encontrado"
              : "Ocorreu um erro tente mais tarde!",
        });
      });
  }, [id]);
  if (!searchedPokemon) return <Loading />;
  return error.fail ? (
    <p>{error.message}</p>
  ) : (
    <div className="App">
      <Modal />
      <div className="d-flex flex-row flex-wrap justify-content-between">
        <Card pokemon={searchedPokemon} />
      </div>
    </div>
  );
};

export default SearchedPokemon;

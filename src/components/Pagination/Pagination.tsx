import React, { useContext } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import { pokemonContext } from "../../contextos/Pokemon";
import { useLocation, useSearchParams } from "react-router-dom";
import { api, pokemonService } from "../../services/api";
// import { Container } from './styles';

const Pagination: React.FC = () => {
  const { next, previous, setNext, setPokemon, setPrevious } =
    useContext(pokemonContext);

  const goToNextPage = async () => {
    const {
      next: nextPage,
      pokemonInfo,
      previous,
    } = await pokemonService.nextPage(next as string);
    setNext(nextPage);
    setPrevious(previous);
    setPokemon(pokemonInfo);
  };
  const goToPreviousPage = async () => {
    const {
      next,
      pokemonInfo,
      previous: previousPage,
    } = await pokemonService.nextPage(previous as string);
    setNext(next);
    setPrevious(previousPage);
    setPokemon(pokemonInfo);
  };

  return (
    <nav className="w-100">
      <MDBPagination className="mb-0 justify-content-end">
        <MDBPaginationItem disabled cl>
          <MDBBtn
            disabled={!previous ? true : false}
            onClick={() => goToPreviousPage()}
          >
            <MDBIcon fas icon="angle-left" color="white" />
          </MDBBtn>
        </MDBPaginationItem>

        <MDBPaginationItem style={{ marginLeft: "15px" }}>
          <MDBBtn
            color="warning"
            disabled={!next ? true : false}
            onClick={() => goToNextPage()}
          >
            <MDBIcon fas icon="angle-right" color="white" />
          </MDBBtn>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
};

export default Pagination;

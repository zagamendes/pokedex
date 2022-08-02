import React, { FormEvent, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Header.css";
import textoPokedex from "../../img/texto-pokedex.svg";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/${busca}`);
  };

  return (
    <MDBNavbar dark bgColor="primary">
      <MDBContainer fluid className="myHeader">
        <MDBNavbarBrand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <div className="ctn-logo">
            <img
              className="w-50"
              src="https://icon-library.com/images/pokedex-icon/pokedex-icon-19.jpg"
            />
            <img className="img-fluid" src={textoPokedex} />
          </div>
        </MDBNavbarBrand>

        <MDBInputGroup
          tag="form"
          onSubmit={(e) => handleForm(e)}
          className="d-flex w-auto mb-3"
        >
          <input
            className="form-control"
            placeholder="Ex: Pikachu"
            aria-label="Search"
            type="Search"
            onChange={({ target }) => setBusca(target.value)}
          />
          <MDBBtn color="danger">
            <MDBIcon fas size="1x" icon="search" /> Buscar
          </MDBBtn>
        </MDBInputGroup>
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/favoritos")}
        >
          <MDBIcon fas icon="heart" color="danger" />
          <p className="text-white m-0 mx-2">Favoritos</p>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}

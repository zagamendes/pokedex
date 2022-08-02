import React, { FC, useContext, useRef, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { modalContext } from "../../contextos/Modal";
import { MDBIcon } from "mdb-react-ui-kit";
import "./Modal.css";
import ListInfo from "../ListInfo/ListInfo";
import { resolve } from "node:path/win32";
import { Pokemon } from "../../types/pokemon";
import AddToFavorites from "../AddToFavorites/AddToFavorites";
const Modal: React.FC<any> = () => {
  const bg: any = {
    grass: "#D6EBDC",
    fire: "#FFEBCA",
    water: "#DFECF5",
    bug: "#E6ECD7",
    normal: "#E8E8E8",
    poison: "#F6EFF9",
    ground: "#F5E4DB",
    fairy: "rgba(221, 138, 220, 0.2)",
    fighting: "#C44D6167",
    flying: "#E8E8E8",
    rock: "#E7F5F2",
    ghost: "#DFE2F1",
    steel: "#DCDBD6",
    electric: "#FFF8B5",
    psychic: "#EB8C8533",
    ice: "#E5F3F0",
    dragon: "#46699933",
    dark: "#3D3C3F33",
    white: "fff",
  };
  const {
    showModal,
    setShowModal,
    chosenPokemon,
    gifResponse,
    setChosenPokemon,
  } = useContext(modalContext);

  const audioRef = useRef<HTMLAudioElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [canClickButton, setCanClickButton] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
    setChosenPokemon(null);
  };

  const speak = () => {
    audioRef.current?.play();
    imageRef.current?.classList.add("bounce");
  };

  return !chosenPokemon ? null : (
    <MDBModal
      show={showModal}
      setShow={setShowModal}
      onHide={() => setChosenPokemon(null)}
    >
      <MDBModalDialog>
        <MDBModalContent
          style={{ backgroundColor: bg[chosenPokemon.types[0].type.name] }}
        >
          <MDBModalHeader className="border-bottom-0">
            <MDBModalTitle className="text-black">
              <strong>{chosenPokemon.name}</strong>
            </MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={() => closeModal()}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody className="d-flex flex-column">
            <div className="ctn-img px-2 py-2 align-self-center d-flex justify-content-center">
              <img
                className="img-fluid"
                src={chosenPokemon.sprites.other.dream_world.front_default}
                ref={imageRef}
              />
            </div>
            <div>
              <ListInfo pokemon={chosenPokemon} />
            </div>
          </MDBModalBody>

          <MDBModalFooter className="border-bottom-0 border-top-0 d-flex">
            <audio
              ref={audioRef}
              onEnded={() => imageRef.current?.classList.remove("bounce")}
              onCanPlay={() => setCanClickButton(true)}
            >
              <source
                src={`https://us-central1-pokedex-8bb62.cloudfunctions.net/app/${chosenPokemon.name}`}
                type="audio/wav"
              />
            </audio>
            <MDBBtn
              color="primary"
              disabled={!canClickButton}
              onClick={() => speak()}
            >
              <MDBIcon size="lg" fas icon="volume-up" className="mx-2" />
              Reproduzir som
            </MDBBtn>
            <AddToFavorites />
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};
export default Modal;

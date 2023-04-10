import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";

import {
  Container,
  Dishe,
  ContentDescription,
  WrapperTags,
  WrapperButton,
} from "./styles";

import { Button } from "../Button";

import { Link } from "react-router-dom";

export function EditDisheAdmin() {
  return (
    <Container>
      <Link to="/home-admin">
        <MdOutlineArrowBackIos size={32} />
        voltar
      </Link>

      <Dishe>
        <img src="/assets/images/image-2.png" alt="Foto do prato" />

        <ContentDescription>
          <h2>Salada Ravanello</h2>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>
          <WrapperTags>
            <span>alface</span>
            <span>cebola</span>
            <span>pão naan</span>
            <span>pepino</span>
            <span>rabanete</span>
            <span>tomate</span>
          </WrapperTags>

          <WrapperButton>
            <Button title="Editar Prato" />
          </WrapperButton>
        </ContentDescription>
      </Dishe>
    </Container>
  );
}

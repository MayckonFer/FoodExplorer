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

export function EditDishe() {
  return (
    <Container>
      <a href="#">
        <MdOutlineArrowBackIos size={32} />
        voltar
      </a>

      <Dishe>
        <img src="/images/image-2.png" alt="Foto do prato" />

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
            <div>
              <button>
                <BsDash size={24} />
              </button>
              <span>01</span>
              <button>
                <AiOutlinePlus size={24} />
              </button>
            </div>

            <Button title="incluir ∙ R$ 25,00">
              <img src="/images/receipt.svg" alt="" />
            </Button>
          </WrapperButton>
        </ContentDescription>
      </Dishe>
    </Container>
  );
}

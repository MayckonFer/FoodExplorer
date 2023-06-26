import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

import imgCard from "/assets/images/img-card-1.png";

import {
  ContainerCard,
  TitleCard,
  DescriptionCard,
  PriceCard,
  AmountProduct,
  FooterCard,
} from "./styles";

import { Button } from "../../../components/Button";

export function Card() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <ContainerCard>
      {isFavorite === true ? (
        <button
          id="isFavorite"
          title="Favorito"
          onClick={() => setIsFavorite(false)}
        >
          <AiFillHeart size={24} color="#fff" />
        </button>
      ) : (
        <button
          id="isFavorite"
          title="Favoritar"
          onClick={() => setIsFavorite(true)}
        >
          <AiOutlineHeart size={24} color="#fff" />
        </button>
      )}

      <img src={imgCard} alt="" />

      <TitleCard>Suco de maracujá</TitleCard>

      <DescriptionCard>
        Presunto de parma e rúcula em um pão com fermentação natural.
      </DescriptionCard>

      <PriceCard>R$ 13,97</PriceCard>

      <FooterCard>
        <AmountProduct>
          <button>
            <RiSubtractFill size={24} color="#fff" />
          </button>
          <span>01</span>
          <button>
            <AiOutlinePlus size={24} color="#fff" />
          </button>
        </AmountProduct>

        <Button title="incluir" />
      </FooterCard>
    </ContainerCard>
  );
}

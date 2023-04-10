import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";

import {
  Container,
  ButtonFavorite,
  Title,
  Description,
  Price,
  WrapperFooter,
} from "./styles";

import { Button } from "../Button";
import { Link } from "react-router-dom";

export function CardDish({ image, title, price, description }) {
  const [favoriteHeart, setFavoriteHeart] = useState(false);

  return (
    <Container>
      {favoriteHeart === true ? (
        <ButtonFavorite onClick={() => setFavoriteHeart(false)}>
          <AiFillHeart size={32} />
        </ButtonFavorite>
      ) : (
        <ButtonFavorite onClick={() => setFavoriteHeart(true)}>
          <AiOutlineHeart size={32} />
        </ButtonFavorite>
      )}

      <img src={image} alt={title} />

      <Title>{title} &gt;</Title>
      <Description>{description}</Description>

      <Price>{price}</Price>

      <WrapperFooter>
        <div>
          <button>
            <BsDash size={32} />
          </button>
          <span>01</span>
          <button>
            <AiOutlinePlus size={32} />
          </button>
        </div>

        <Link to="/prato">
          <Button title="incluir" />
        </Link>
      </WrapperFooter>
    </Container>
  );
}

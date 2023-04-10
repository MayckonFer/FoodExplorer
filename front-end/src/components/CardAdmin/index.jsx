import React from "react";
import { GrEdit } from "react-icons/gr";

import { Container, ButtonFavorite, Title, Description, Price } from "./styles";

export function CardAdmin({ image, title, price, description }) {
  return (
    <Container>
      <ButtonFavorite to="/prato-admin">
        <GrEdit size={32} />
      </ButtonFavorite>

      <img src={image} alt={title} />

      <Title>{title} &gt;</Title>
      <Description>{description}</Description>

      <Price>{price}</Price>
    </Container>
  );
}

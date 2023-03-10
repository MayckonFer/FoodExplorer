import React from "react";

import { Container, Spacing, Main, WrapperInfo } from "./styles";

import { Header } from "../../components/Header";
import { Meals } from "../../components/Meals";
import { Footer } from "../../components/Footer";
import { Dessert } from "../../components/Dessert";
import { Drinks } from "../../components/Drinks";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Spacing>
          <WrapperInfo>
            <img src="/images/img1.png" alt="Imagem de frutas" />
            <img src="/images/img2.png" alt="Imagem de frutas" />

            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </WrapperInfo>

          <Meals />
          <Dessert />
          <Drinks />
        </Spacing>
      </Main>
      <Footer />
    </Container>
  );
}

import React from "react";

import { Container, Spacing, Main, WrapperInfo } from "./styles";

import { MealsAdmin } from "../../components/MealsAdmin";
import { DessertAdmin } from "../../components/DessertAdmin";
import { DrinksAdmin } from "../../components/DrinksAdmin";

export function HomeAdmin() {
  return (
    <Container>
      <Main>
        <Spacing>
          <WrapperInfo>
            <img src="/assets/images/img1.png" alt="Imagem de frutas" />
            <img src="/assets/images/img2.png" alt="Imagem de frutas" />

            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </WrapperInfo>

          <MealsAdmin />
          <DessertAdmin />
          <DrinksAdmin />
        </Spacing>
      </Main>
    </Container>
  );
}

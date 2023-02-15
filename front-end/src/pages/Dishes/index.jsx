import React from "react";

import { Container, Spacing, Main } from "./styles";

import { Header } from "../../components/Header";
import { EditDishe } from "../../components/EditDishe";
import { Footer } from "../../components/Footer";

export function Dishes() {
  return (
    <Container>
      <Header />
      <Main>
        <Spacing>
          <EditDishe />
        </Spacing>
      </Main>
      <Footer />
    </Container>
  );
}

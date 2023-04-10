import React from "react";

import { Container, Spacing, Main } from "./styles";

import { EditDishe } from "../../components/EditDishe";

export function Dishes() {
  return (
    <Container>
      <Main>
        <Spacing>
          <EditDishe />
        </Spacing>
      </Main>
    </Container>
  );
}
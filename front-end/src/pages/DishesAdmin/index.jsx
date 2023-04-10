import React from "react";

import { Container, Spacing, Main } from "./styles";

import { EditDisheAdmin } from "../../components/EditDisheAdmin";

export function DishesAdmin() {
  return (
    <Container>
      <Main>
        <Spacing>
          <EditDisheAdmin />
        </Spacing>
      </Main>
    </Container>
  );
}

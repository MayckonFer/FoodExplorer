import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "./Card";

import {
  ContainerMain,
  Banner,
  ContainerSnack,
  TitleHome,
  WrapperCards,
} from "./styles";

import imgBanner from "/assets/images/img-banner.png";

export function Home() {
  return (
    <>
      <Header />

      <ContainerMain>
        <Banner>
          <img src={imgBanner} alt="" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <small>
              Sinta o cuidado do preparo com ingredientes selecionados.
            </small>
          </div>
        </Banner>

        <ContainerSnack>
          <TitleHome>Refeições</TitleHome>

          <WrapperCards>
            <Card />
            <Card />
            <Card />
            <Card />
          </WrapperCards>
        </ContainerSnack>

        <ContainerSnack>
          <TitleHome>Sobremesas</TitleHome>

          <WrapperCards>
            <Card />
            <Card />
            <Card />
            <Card />
          </WrapperCards>
        </ContainerSnack>

        <ContainerSnack>
          <TitleHome>Bebidas</TitleHome>

          <WrapperCards>
            <Card />
            <Card />
            <Card />
            <Card />
          </WrapperCards>
        </ContainerSnack>
      </ContainerMain>

      <Footer />
    </>
  );
}

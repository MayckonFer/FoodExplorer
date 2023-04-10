import React from "react";

import { Container, Title } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { CardDish } from "../CardDish";

export function Meals() {
  return (
    <Container>
      <Title>Refeições</Title>
      <Swiper
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          725: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <CardDish
            image="/assets/images/image-1.png"
            title="Salada Ravanello"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price="R$ 49,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDish
            image="/assets/images/image-1.png"
            title="Salada Ravanello"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price="R$ 49,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDish
            image="/assets/images/image-1.png"
            title="Salada Ravanello"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price="R$ 49,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDish
            image="/assets/images/image-1.png"
            title="Salada Ravanello"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price="R$ 49,97"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
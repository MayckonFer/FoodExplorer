import { Container, Title } from "./styles";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { CardDish } from "../CardDish";

export function Drinks() {
  return (
    <Container>
      <Title>Bebidas</Title>
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
            image="/assets/images/image-9.png"
            title="Suco de maracujá"
            description="Suco de maracujá gelado, cremoso, docinho."
            price="R$ 13,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDish
            image="/assets/images/image-9.png"
            title="Suco de maracujá"
            description="Suco de maracujá gelado, cremoso, docinho."
            price="R$ 13,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDish
            image="/assets/images/image-9.png"
            title="Suco de maracujá"
            description="Suco de maracujá gelado, cremoso, docinho."
            price="R$ 13,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDish
            image="/assets/images/image-9.png"
            title="Suco de maracujá"
            description="Suco de maracujá gelado, cremoso, docinho."
            price="R$ 13,97"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
import { Container, Title } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { CardAdmin } from "../CardAdmin";

export function DrinksAdmin() {
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
          <CardAdmin
            image="/assets/images/image-9.png"
            title="Suco de maracujá"
            description="Suco de maracujá gelado, cremoso, docinho."
            price="R$ 13,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardAdmin
            image="/assets/images/image-9.png"
            title="Suco de maracujá"
            description="Suco de maracujá gelado, cremoso, docinho."
            price="R$ 13,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardAdmin
            image="/assets/images/image-9.png"
            title="Suco de maracujá"
            description="Suco de maracujá gelado, cremoso, docinho."
            price="R$ 13,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardAdmin
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

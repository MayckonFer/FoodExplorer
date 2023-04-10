import { Container, Title } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { CardAdmin } from "../CardAdmin";

export function DessertAdmin() {
  return (
    <Container>
      <Title>Sobremesa</Title>
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
            image="/assets/images/image-6.png"
            title="Peachy pastrie"
            description="Delicioso folheado de pêssego com folhas de hortelã."
            price="R$ 32,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardAdmin
            image="/assets/images/image-6.png"
            title="Peachy pastrie"
            description="Delicioso folheado de pêssego com folhas de hortelã."
            price="R$ 32,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardAdmin
            image="/assets/images/image-6.png"
            title="Peachy pastrie"
            description="Delicioso folheado de pêssego com folhas de hortelã."
            price="R$ 32,97"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardAdmin
            image="/assets/images/image-6.png"
            title="Peachy pastrie"
            description="Delicioso folheado de pêssego com folhas de hortelã."
            price="R$ 32,97"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

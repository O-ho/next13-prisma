import React, { useRef } from "react";
import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/scss";

const dummy = [1, 2, 3, 4, 5, 6, 7];
const HomeCarousel = () => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <SwiperComponent
      centeredSlides={true}
      slidesPerView={"auto"}
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      className={"w-full h-32"}
    >
      {dummy.map((item) => (
        <SwiperSlide key={item} className={"w-30 h-30 bg-teal-50"}>
          1111
          {/*<Image*/}
          {/*  src={`/images/sample${item}.jpg`}*/}
          {/*  alt={`sample${item}`}*/}
          {/*  width={100}*/}
          {/*  height={100}*/}
          {/*  className={"relative block w-40 h-40"}*/}
          {/*/>*/}
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default HomeCarousel;

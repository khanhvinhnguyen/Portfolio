import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CarouselProps = {
  src: string;
  alt: string;
};

const Carousel = (data: CarouselProps[]) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        {data.map((item) => {
          return <img src={item.src} alt={item.alt} />;
        })}
      </SwiperSlide>

      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow"></div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default Carousel;

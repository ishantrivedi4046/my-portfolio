"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.scss";

// import required modules
import { ReactNode } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";

interface CoverFlowSliderProps {
  items: ReactNode[];
}
const CoverFlowSlider: React.FC<CoverFlowSliderProps> = ({ items }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {items.map((item) => (
          <SwiperSlide>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CoverFlowSlider;

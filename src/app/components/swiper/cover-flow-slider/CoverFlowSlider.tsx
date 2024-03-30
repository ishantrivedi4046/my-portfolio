"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.scss";

// import required modules
import { useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Slide from "./Slide";
import { CoverFlowSlideType } from "./types";

interface CoverFlowSliderProps {
  items: CoverFlowSlideType[];
}

const CoverFlowSlider: React.FC<CoverFlowSliderProps> = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        coverflowEffect={{ rotate: 65 }}
        modules={[EffectCoverflow, Pagination]}
        onActiveIndexChange={(s) => setActiveSlide(s?.activeIndex)}
      >
        {items.map((item, idx) => (
          <SwiperSlide>
            <Slide {...item} activeSlide={idx === activeSlide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CoverFlowSlider;

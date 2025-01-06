"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import cx from "classnames";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.scss";

// import required modules
import { EffectCards } from "swiper/modules";
import { CardsSlideType } from "../cover-flow-slider/types";

interface CardsSliderProps {
  items: CardsSlideType[];
}

const CardsSlider: React.FC<CardsSliderProps> = ({ items }) => {
  return (
    <>
      <Swiper
        effect="cards"
        className="mySwiper"
        grabCursor={true}
        speed={500}
        modules={[EffectCards]}
      >
        {items.map(({ backgroundGradiant, summary, details }, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={cx("w-full h-full flex flex-col", backgroundGradiant)}
            >
              {summary}
              <div className="flex flex-col px-6 py-4 text-white font-medium justify-center">
                <div className="text-2xl mt-2">{details?.title}</div>
                <div className="mt-4 text-sm max-h-[11.5rem] overflow-auto">
                  {details?.desc}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardsSlider;

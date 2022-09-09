import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SliderProps } from "../../../types/slider/sliderTypes";

import ArrowNext from "./arrowNext";
import ArrowPrev from "./arrowPrev";

import styles from "./slider.module.scss";

import BonusCard from "../../entities/bonusCard/bonusCard";

const Slider = ({bonuses} : SliderProps) => {
  const [arrowPrev, setArrowPrev] = useState(true);
  const [arrowNext, setArrowNext] = useState(false);

  const onClickNext = (swiper: {
    activeIndex: number;
    slideNext: () => void;
    slides: string | any[];
  }) => {
    swiper.slideNext();

    if (swiper.activeIndex !== 0) {
      setArrowPrev(false);
    }

    if (swiper.activeIndex == swiper.slides.length - 5) {
      setArrowNext(true);
    }
  };

  const onClickPrev = (swiper: {
    slidePrev: () => void;
    activeIndex: number;
    slides: string | any[];
  }) => {
    swiper.slidePrev();
    if (swiper.activeIndex !== swiper.slides.length - 5) {
      setArrowNext(false);
    }

    if (swiper.activeIndex == 0) {
      setArrowPrev(true);
    }
  };

  return (
    <div className={`${styles["slider-wrapper"]} container`}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={31}
        pagination
        allowTouchMove={false}
      >
        {bonuses.map((bonus) => {
          return (
            <SwiperSlide key={bonus.key}>
              <BonusCard
                casinoName={bonus.casinoName}
                exclusive={bonus.exclusive}
                bonusValue={bonus.bonusValue}
                countFreeSpins={bonus.countFreeSpins}
                typeOfBonus={bonus.typeOfBonus}
                logoSrc={bonus.logoSrc}
              ></BonusCard>
            </SwiperSlide>
          );
        })}
        <ArrowNext arrowNext={arrowNext} onClickNext={onClickNext} />
        <ArrowPrev arrowPrev={arrowPrev} onClickPrev={onClickPrev} />
      </Swiper>
    </div>
  );
};
export default Slider;


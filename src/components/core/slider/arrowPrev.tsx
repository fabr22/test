import Swiper from "swiper";
import { useSwiper } from "swiper/react";
import ArrowSlider from "../../../assets/svg/arrowSlider";
import styles from "./slider.module.scss";

interface SwiperButtonPrev {
  arrowPrev: boolean;
  onClickPrev: (a: Swiper) => void;
}

const ArrowPrev = ({ arrowPrev, onClickPrev }: SwiperButtonPrev) => {
  const swiper = useSwiper();

  return (
    <div
      className={`${styles["arrow-prev"]} ${
        arrowPrev ? styles["disabled"] : ""
      }`}
      onClick={() => onClickPrev(swiper)}
    >
      <ArrowSlider />
    </div>
  );
};

export default ArrowPrev;
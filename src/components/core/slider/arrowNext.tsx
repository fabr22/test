import { useSwiper } from "swiper/react";
import ArrowSlider from "../../../assets/svg/arrowSlider";
import styles from "./slider.module.scss";

interface SwiperButtonNext {
  arrowNext: boolean;
  onClickNext: (a: any) => void;
}

const ArrowNext = ({ arrowNext, onClickNext }: SwiperButtonNext) => {
  const swiper = useSwiper();
  return (
    <div
      className={`${styles["arrow-next"]} ${
        arrowNext ? styles["disabled"] : ""
      }`}
      onClick={() => onClickNext(swiper)}
    >
      <ArrowSlider />
    </div>
  );
};

export default ArrowNext;
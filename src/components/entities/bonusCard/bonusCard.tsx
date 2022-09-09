import styles from "./bonusCard.module.scss";

import { BonusCardProps } from "../../../types/bonus/bonusCardTypes";

import Image from "next/image";
import Badge from "../../shared/badge/badge";
import ButtonWithCountry from "../../shared/buttonWithCountry/buttonWithCountry";
import InfoIcon from "../../../assets/svg/infoIcon";

import { numberWithCommas } from "../../../../utils/helpers";

const BonusCard = ({
  casinoName,
  exclusive,
  bonusValue,
  countFreeSpins,
  logoSrc,
  typeOfBonus,
  children,
  ...props
}: BonusCardProps): JSX.Element => {
  const bonusValueWithCommans = numberWithCommas(bonusValue);

  return (
    <div className={styles["wrapper"]} {...props}>
      <div className={styles["header"]}>
        <div className={styles["logo-wrapper"]}>
          <Image src={logoSrc} alt="Casino Logo" width={242} height={100} />
        </div>
      </div>
      <div className={styles["body-wrapper"]}>
        <div className={styles["body"]}>
          {exclusive ? (
            <div className={styles["badge-wrapper"]}>
              <Badge> exclusive </Badge>
            </div>
          ) : null}
          <div className={styles["type-of-bonus"]}>
            {typeOfBonus.toUpperCase()} BONUS
          </div>
          <hr className={styles["line"]} />
          <div className={styles["up-to"]}>400% up to</div>
          <div className={styles["bonus-value"]}>${bonusValueWithCommans}</div>
          <div className={styles["free-spins"]}>+ 100 Free Spins </div>
          <div className={styles["game"]}>on Cleopatra&rsquo;s Gold</div>
          <ButtonWithCountry> Play </ButtonWithCountry>
          <div className={styles["info-icon-wrapper"]}>
            <InfoIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;

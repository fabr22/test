import styles from "./bestBonuses.module.scss";
import Button from "../../shared/bonusButton/bonusButton";
import Slider from "../../core/slider/slider";

import mockData from "./mockData";

import BonusCard from "../bonusCard/bonusCard";
import { useState } from "react";

const BestBonuses = () => {
  const [isAll, setIsAll] = useState<boolean>(false);
  const initialBonuses = mockData.filter(
    (bonus) => bonus.typeOfBonus === "no deposit"
  );
  const [filtredBonuses, setFiltredBonuses] = useState(initialBonuses);
  const [activeButton, setActiveButton] = useState("No Deposit");

  const activeButtonType = {
    welcome: "Welcome",
    freeSpins: "Free Spins",
    noDeposit: "No Deposit",
  };

  const handleButtonClick = (type: string) => {
    setActiveButton(type);
    setFiltredBonuses(
      mockData.filter((bonus) => bonus.typeOfBonus === type.toLowerCase())
    );
  };

  const handleShowAll = () => {
    setIsAll((prev) => !prev);
  };

  const allCards = filtredBonuses.map((bonus) => {
    return (
      <BonusCard
        key={bonus.key}
        casinoName={bonus.casinoName}
        exclusive={bonus.exclusive}
        bonusValue={bonus.bonusValue}
        countFreeSpins={bonus.countFreeSpins}
        typeOfBonus={bonus.typeOfBonus}
        logoSrc={bonus.logoSrc}
      />
    );
  });

  return (
    <div className={`${styles["wrapper"]}`}>
      <div className={styles["header"]}>
        <h1 className={styles["title"]}> Best Bonuses Lorem Ipsum</h1>
        <div className={styles["description"]}>
          Welcome, all you passionate Australian online casino players out
          there! If you a rookie looking for some quick guidelines on how to get
          started or a seasoned player searching for some fresh real money
          casino recommendations, you&lsquo;ve reached the right spot at True
          Blue!
        </div>
      </div>

      <div className={styles["bonusType"]}>
        <Button
          onClick={() => handleButtonClick(activeButtonType.noDeposit)}
          appearence={`${
            activeButton === activeButtonType.noDeposit
              ? "blue-gradient"
              : "white"
          }`}
        >
          No Deposit Bonus
        </Button>
        <Button
          onClick={() => handleButtonClick(activeButtonType.welcome)}
          appearence={`${
            activeButton === activeButtonType.welcome
              ? "blue-gradient"
              : "white"
          }`}
        >
          Welcome Bonus
        </Button>
        <Button
          onClick={() => handleButtonClick(activeButtonType.freeSpins)}
          appearence={`${
            activeButton === activeButtonType.freeSpins
              ? "blue-gradient"
              : "white"
          }`}
        >
          Free Spins Bonus
        </Button>
      </div>

      {isAll || filtredBonuses.length < 6 ? (
        <div className={styles["all-cards"]}> {allCards} </div>
      ) : (
        <Slider bonuses={filtredBonuses} />
      )}

      <Button appearence="bold-text" onClick={handleShowAll}>
        {isAll ? "Close" : `Show All ${activeButton} Bonuses`}
      </Button>
    </div>
  );
};

export default BestBonuses;

import styles from "./bestBonuses.module.scss";
import Button from "../../shared/bonusButton/bonusButton";
import Slider from "../../core/slider/slider";

import mockData from "./mockData";

import BonusCard from "../bonusCard/bonusCard";
import { useState } from "react";

const BestBonoses = () => {
  const [isAll, setIsAll] = useState<boolean>(false);
  const initialBonuses = mockData.filter(
    (bonus) => bonus.typeOfBonus === "no deposit"
  );
  const [filtredBonuses, setFiltredBonuses] = useState(initialBonuses);
  const [activeButton, setActiveButton] = useState("No Deposit");

  const handleWelcomeBonusClick = () => {
    setActiveButton("Welcome");
    setFiltredBonuses(
      mockData.filter((bonus) => bonus.typeOfBonus === "welcome")
    );
  };

  const handleFreeSpinsBonusClick = () => {
    setActiveButton("Free Spins");
    setFiltredBonuses(
      mockData.filter((bonus) => bonus.typeOfBonus === "free spins")
    );
  };

  const handleNoDepositBonusClick = () => {
    setActiveButton("No Deposit");
    setFiltredBonuses(
      mockData.filter((bonus) => bonus.typeOfBonus === "no deposit")
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
      ></BonusCard>
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
          onClick={handleNoDepositBonusClick}
          appearence={`${
            activeButton === "No Deposit" ? "blue-gradient" : "white"
          }`}
        >
          No deposit bonus
        </Button>
        <Button
          onClick={handleWelcomeBonusClick}
          appearence={`${
            activeButton === "Welcome" ? "blue-gradient" : "white"
          }`}
        >
          Welcome Bonus
        </Button>
        <Button
          onClick={handleFreeSpinsBonusClick}
          appearence={`${
            activeButton === "Free Spins" ? "blue-gradient" : "white"
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

export default BestBonoses;

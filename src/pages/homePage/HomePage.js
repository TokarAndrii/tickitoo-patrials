import React from "react";
import styles from "./HomePage.module.scss";
import iconComputer from "./icon-computer.svg";
import iconCard from "./icon-credit-card.svg";
import iconDirections from "./icon-directions.svg";
import iconCarriers from "./icon-carriers.svg";
import iconRefund from "./icon-refund.svg";

const HomePage = () => (
  <div className={[styles["home"], styles["home--main"]].join(" ")}>
    <div className={styles.container}>
      <div className={styles["home__content"]}>
        <h1 className={styles["home__title"]}>
          Билеты на автобусы по Украине и Европе
        </h1>
        <div className={styles["home__settings"]} />
        <div className={styles["home__advantages"]}>
          <div className={styles["home__advantages-item"]}>
            <div
              className={[
                styles["home__advantages-icon"],
                styles["home__advantages-icon--computer"]
              ].join(" ")}
            >
              <img src={iconComputer} alt="computer" />
            </div>
            <div className={styles["home__advantages-title"]}>
              Быстрая покупка онлайн
            </div>
          </div>
          <div className={styles["home__advantages-item"]}>
            <div
              className={[
                styles["home__advantages-icon"],
                styles["home__advantages-icon--card"]
              ].join(" ")}
            >
              <img src={iconCard} alt="credit card" />
            </div>
            <div className={styles["home__advantages-title"]}>
              Оплата картой
            </div>
          </div>
          <div className={styles["home__advantages-item"]}>
            <div
              className={[
                styles["home__advantages-icon"],
                styles["home__advantages-icon--directions"]
              ].join(" ")}
            >
              <img src={iconDirections} alt="directions" />
            </div>
            <div className={styles["home__advantages-title"]}>
              Более 40 000 рейсов
            </div>
          </div>
          <div className={styles["home__advantages-item"]}>
            <div
              className={[
                styles["home__advantages-icon"],
                styles["home__advantages-icon--carriers"]
              ].join(" ")}
            >
              <img src={iconCarriers} alt="carriers" />
            </div>
            <div className={styles["home__advantages-title"]}>
              Более 10 000 перевозчиков
            </div>
          </div>
          <div className={styles["filter__advantages-item"]}>
            <div
              className={[
                styles["home__advantages-icon"],
                styles["home__advantages-icon--refund"]
              ].join(" ")}
            >
              <img src={iconRefund} alt="refund" />
            </div>
            <div className={styles["home__advantages-title"]}>
              Возврат без проблем
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

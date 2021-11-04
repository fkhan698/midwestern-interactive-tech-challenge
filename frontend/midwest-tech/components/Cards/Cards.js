import React from "react";
//Import constants
import { cards } from "../../constants/constants.js";
//Card component
import Card from "./Card.js";
//Styles
import styles from "../../styles/Cards.module.css";
export default function Cards() {
  return (
    //JSX
    <>
      <div className={styles.cardsContainer}>
        {cards.map(card => {
          return <Card key={card.id} card={card}></Card>;
        })}
      </div>
    </>
  );
}

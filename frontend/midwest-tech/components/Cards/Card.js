import React from "react";
import styles from "../../styles/Cards.module.css";
import Image from "next/image";

export default function Card({ card }) {
  return (
    <div className={styles.card} key={card.id}>
      <img
        className={styles.cardImage}
        src={card.image}
        width="80px"
        height="100px"
        alt="Talkie"
      ></img>
      <h1 className={styles.cardHead}>{card.title}</h1>
      <p className={styles.cardText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <button className={styles.cardButton}>Learn More</button>
    </div>
  );
}

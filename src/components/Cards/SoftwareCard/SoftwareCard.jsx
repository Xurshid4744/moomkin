import React from "react";
import styles from "./index.module.scss"
const SoftwareCard = ({ img, title, subtitle, hcolor, pcolor, clas=true }) => {
  return (
    <section className={clas ? styles.cardWrapper : styles.cardContainer}>
      <img src={img} alt="img"/>
      <h4 style={{color: hcolor}} >{title}</h4>
      <p style={{color: pcolor}}>{subtitle}</p>
    </section>
  );
};

export default SoftwareCard;

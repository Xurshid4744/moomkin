import React from "react";
import styles from "./index.module.scss"
const AnimationText = ({ title, subtitle }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
      <h4>{title}</h4>
      <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default AnimationText;

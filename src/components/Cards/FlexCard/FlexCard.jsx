import React from "react";
import styles from "./index.module.scss";
const FlexCard = ({ img, title, children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.images}>
        <img src={img} alt="" width={70} height={70} />
      </div>
      <div>
        <h6>{title}</h6>
        <p>{children}</p>
      </div>
    </section>
  );
};

export default FlexCard;

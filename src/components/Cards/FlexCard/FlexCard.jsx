import React from "react";
import styles from "./index.module.scss";
const FlexCard = ({ img, title, children, color, width="70", height="70" }) => {
  return (
    <section className={styles.container}>
      <div className={styles.images}>
        <img src={img} alt="" width={width} height={height} />
      </div>
      <div>
        <h6 style={{color: color}}>{title}</h6>
        <p>{children}</p>
      </div>
    </section>
  );
};

export default FlexCard;

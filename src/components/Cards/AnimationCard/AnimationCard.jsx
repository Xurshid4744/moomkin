import React from "react";
import styles from "./index.module.scss";
const AnimationCard = ({ img1, img2, title, ul, children, left = false }) => {
  return (
    <section
      className={left ? `${styles.containerRight}` : `${styles.container}`}
      data-aos={left ? "fade-left" : "fade-right"}
      data-aos-duration="900"
    >
      <div className={styles.wrapper}>
        <img src={img1} alt="" className={styles.img} />
        <img src={img2} alt="" className={styles.imgHover} />
        <div>
          <h4>{title}</h4>
          <ul>
            {ul.map((item) => (
              <li>{item.li}</li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </section>
  );
};

export default AnimationCard;

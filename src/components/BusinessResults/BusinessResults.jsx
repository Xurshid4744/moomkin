import React from "react";
import styles from "./index.module.scss";
import galka from "../../assets/icons/galka.svg";
const BusinessResults = ({ data }) => {
  return (
    <section className={`globalContainer`}>
      {data.map((item) => (
        <div className={styles.container}>
          <img src={galka} alt="" width={25} />
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
};

export default BusinessResults;

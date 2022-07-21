import React from "react";
import styles from "./index.module.scss";
const BusinessProcess = ({data}) => {
  return (
    <>
      {data.map((item, index) => (
        <section className={styles.container}>
          <p>0{index + 1}</p>
          <h6>{item.title}</h6>
        </section>
      ))}
    </>
  );
};

export default BusinessProcess;

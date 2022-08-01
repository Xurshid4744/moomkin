import React from "react";
import Button from "../Button/Button";
import styles from "./index.module.scss"
const HeadLine = ({ data,  hidden = false, children }) => {


  return (
    <section>
      <h2 className={styles.title}>{data.title}</h2>
      {data.children}
      {children}
      <div hidden={hidden}>
        <Button title={"GET IN TOUCH"} />
      </div>
    </section>
  );
};

export default HeadLine;

import { Collapse } from "antd";
import React from "react";
import styles from "./Acardion.module.scss"
const { Panel } = Collapse;

const Acardion = ({ data }) => (
  <>
    {data.map((item) => (
      <Collapse bordered={false}  className={styles.collapse} expandIconPosition={"end"}>
        <Panel header={item.title} key={item.id} className={styles.panel}>
          <p className={styles.title}>{item.text}</p>
        </Panel>
      </Collapse>
    ))}
  </>
);

export default Acardion;

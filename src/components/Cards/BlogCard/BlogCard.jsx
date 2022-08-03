import React from "react";
import styles from "./index.module.scss";
import img2 from "../../../assets/images/umar.JPG";
import { ClockCircleOutlined } from "@ant-design/icons";
const BlogCard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.images}></div>
      <div className={styles.titles}>
        <h6>Why Does Internet of Things (IoT) Matter (Explained)</h6>
        <div className={styles.about}>
          <div className={styles.left}>
            <img src={img2} alt="" />
            <div>
              <p>Nikita Zubovich</p>
              <p>July 29, 2022</p>
            </div>
          </div>
          <div className={styles.right}>
            <span>
              <ClockCircleOutlined />
            </span>
            <p>28 mins</p>
          </div>
        </div>
        <span className={styles.readMore}>Read More</span>
      </div>
    </section>
  );
};

export default BlogCard;

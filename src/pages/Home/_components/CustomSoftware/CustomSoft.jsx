import React from "react";
import Title from "../../../../components/Title/Title";

import styles from "./Custom.module.scss";
import "../../../../styles/_global.scss";

import img1 from "../../../../assets/images/mainImg1.jpg";
import img2 from "../../../../assets/images/mainImg2.jpg";
import img3 from "../../../../assets/images/mainImg3.jpg";
import img4 from "../../../../assets/images/mainImg4.jpg";
import TinySwiper from "../../../../components/Swipers/TinySwiper/TinySwiper";

const CustomSoft = () => {
  const images = [
    { img: img1, name: "foto" },
    { img: img2, name: "foto" },
    { img: img3, name: "foto" },
    { img: img4, name: "foto" },
  ];
  return (
    <section className={`globalContainer ${styles.customSoft}`}>
      <Title title={"Custom Software That Brings Value"} />
      <div className={styles.customWraper}>
        <p className={styles.title} data-aos="flip-left">
          SumatoSoft, a software development company, helps to digitize
          businesses by focusing on client’s business challenges, needs, pain
          points and providing business-goals-oriented software solutions. We
          value close transparent cooperation and encourage our clients to
          participate actively in the project development life cycle. <br />
          <br /> - 100+ developed custom solutions <br /> - 30+ clients <br /> -
          15+ Business partner
        </p>
        <TinySwiper data={images} />
      </div>
    </section>
  );
};

export default CustomSoft;

import React from "react";
import WorkersCard from "../../../components/Cards/WorkersCard/WorkersCard";
import styles from "./Testimonial.module.scss";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Title from "../../../components/Title/Title";

import avatar1 from "../../../assets/images/abdulaziz.jpg";
import avatar2 from "../../../assets/images/risqiddin.jpg";
import avatar3 from "../../../assets/images/umar.JPG";
import avatar4 from "../../../assets/images/bobur.jpg";
import avatar5 from "../../../assets/images/hamza.png";
import avatar6 from "../../../assets/images/img2.jpg";

const Testimonial = () => {
  const menu = [{ link: "", label: "Testimonials" }];
  const bigSwiper = [
    {
      img: avatar6,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      children: (
        <div className={styles.cards}>
          <h5>
            "The system has produced a significant competitive advantage in the
            industry thanks to SumatoSoft’s well-thought opinions.
          </h5>
          <p>
            They shouldered the burden of constantly updating a project
            management tool with a high level of detail and were committed to
            producing the best possible solution".
          </p>
        </div>
      ),
    },
    {
      img: avatar1,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      children: (
        <div className={styles.cards}>
          <h5>
            "The system has produced a significant competitive advantage in the
            industry thanks to SumatoSoft’s well-thought opinions.
          </h5>
          <p>
            They shouldered the burden of constantly updating a project
            management tool with a high level of detail and were committed to
            producing the best possible solution".
          </p>
        </div>
      ),
    },
    {
      img: avatar2,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      children: (
        <div className={styles.cards}>
          <h5>
            "The system has produced a significant competitive advantage in the
            industry thanks to SumatoSoft’s well-thought opinions.
          </h5>
          <p>
            They shouldered the burden of constantly updating a project
            management tool with a high level of detail and were committed to
            producing the best possible solution".
          </p>
        </div>
      ),
    },
    {
      img: avatar3,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      children: (
        <div className={styles.cards}>
          <h5>
            "The system has produced a significant competitive advantage in the
            industry thanks to SumatoSoft’s well-thought opinions.
          </h5>
          <p>
            They shouldered the burden of constantly updating a project
            management tool with a high level of detail and were committed to
            producing the best possible solution".
          </p>
        </div>
      ),
    },
    {
      img: avatar4,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      children: (
        <div className={styles.cards}>
          <h5>
            "The system has produced a significant competitive advantage in the
            industry thanks to SumatoSoft’s well-thought opinions.
          </h5>
          <p>
            They shouldered the burden of constantly updating a project
            management tool with a high level of detail and were committed to
            producing the best possible solution".
          </p>
        </div>
      ),
    },
    {
      img: avatar5,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      children: (
        <div className={styles.cards}>
          <h5>
            "The system has produced a significant competitive advantage in the
            industry thanks to SumatoSoft’s well-thought opinions.
          </h5>
          <p>
            They shouldered the burden of constantly updating a project
            management tool with a high level of detail and were committed to
            producing the best possible solution".
          </p>
        </div>
      ),
    },
    {
      img: avatar6,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      children: (
        <div className={styles.cards}>
          <h5>
            "The system has produced a significant competitive advantage in the
            industry thanks to SumatoSoft’s well-thought opinions.
          </h5>
          <p>
            They shouldered the burden of constantly updating a project
            management tool with a high level of detail and were committed to
            producing the best possible solution".
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <p>YOU SHOULDN'T ONLY BELIEVE OUR WORDS</p>
          <Title title={"SEE WHAT OUR CLIENTS SAY"} color={"#fff"} />
        </div>
      </section>
      <section className={styles.cardsBox}>
        {bigSwiper.map((item) => (
          <WorkersCard
            img={item.img}
            job={item.job}
            name={item.name}
            position={item.position}
            title={item.children}
          />
        ))}
      </section>
    </>
  );
};

export default Testimonial;

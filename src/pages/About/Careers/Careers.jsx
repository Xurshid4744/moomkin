import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import FactsCard from "../../../components/Cards/FactsCard/FactsCard";
import Title from "../../../components/Title/Title";
import styles from "./Careers.module.scss";
import icon1 from "../../../assets/icons/card_icon6.svg";
import icon2 from "../../../assets/icons/card_icon5.svg";
import icon3 from "../../../assets/icons/card_icon2.svg";
import icon4 from "../../../assets/icons/Edu-opportunities.svg";
import icon5 from "../../../assets/icons/Remote-work.svg";
import icon6 from "../../../assets/icons/Flexible-schedule.svg";
import icon7 from "../../../assets/icons/Company-retreats.svg";
import icon8 from "../../../assets/icons/International-projects.svg";
import icon9 from "../../../assets/icons/Corporate-activities.svg";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import Acardion from "../../../components/Acardion/Acardion";
import ProjectAnalysis from "../../../components/ProjectAnalysis/ProjectAnalysis";
const Careers = () => {
  const menu = [{ link: "", label: "Partfolio" }];
  const obj = [
    {
      img: icon1,
      title: "9+ Years",
      subtitle: "On the market",
    },
    {
      img: icon2,
      title: "70+",
      subtitle: "Team members",
    },
    {
      img: icon3,
      title: "100+",
      subtitle: "Happy clients",
    },
    {
      img: icon4,
      title: "Edu opportunities",
    },
    {
      img: icon5,
      title: "Remote work",
    },
    {
      img: icon6,
      title: "Flexible schedule",
    },
    {
      img: icon7,
      title: "Company retreats",
    },
    {
      img: icon8,
      title: "International projects",
    },
    {
      img: icon9,
      title: "Corporate activities",
    },
  ];
  const acardion = [
    {
      title: "Ruby on Rails / Full Stack (RoR+React.js) Developer",
      text: "No answers",
      id: "1",
    },
    {
      title: "Node.js / Full Stack (React+Node) Developer",
      text: "No answers",
      id: "2",
    },
    {
      title: "React.js Developer",
      text: "No answers",
      id: "3",
    },
    {
      title: "React Native Developer",
      text: "No answers",
      id: "4",
    },
  ];
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <h4>Careers at SumatoSoft</h4>
          <p>Join our team!</p>
        </div>
      </section>
      <section className={`globalContainer`}>
        <div>
          <Title title={"Quick Facts"} />
        </div>
        <div className={styles.cards}>
          {obj.map((item) => (
            <FactsCard
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              key={item.title}
            />
          ))}
        </div>
      </section>
      <section
        className={`${styles.images} globalContainer`}
        data-aos="flip-up"
      >
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </section>
      <section className={styles.questions}>
        <div className={`${styles.questionsBox} globalContainer`}>
          <Title title={"Find your dream job"} />
          <Acardion data={acardion} />
        </div>
      </section>
      <ProjectAnalysis/>
    </>
  );
};

export default Careers;

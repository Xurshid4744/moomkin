import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Title from "../../../components/Title/Title";
import styles from "./WhitePapers.module.scss";
import img from "../../../assets/images/allCard.png"
import SoftwareCard from "../../../components/Cards/SoftwareCard/SoftwareCard";
import img31 from "../../../assets/icons/sertificat-1.svg";
import img32 from "../../../assets/icons/sertificat-2.svg";
import img33 from "../../../assets/icons/sertificat-3.svg";
import img34 from "../../../assets/icons/sertificat-4.svg";
import img35 from "../../../assets/icons/sertificat-5.svg";
import img36 from "../../../assets/icons/sertificat-6.svg";
import ProjectAnalysis from "../../../components/ProjectAnalysis/ProjectAnalysis";
const WhitePapers = () => {
  const menu = [{ link: "", label: "Whitepapers" }];
  
  const softCard = [
    {
      img: img31,
      title: "Recognized by Clutch.co",
    },
    {
      img: img32,
      title: "AMAZON Consulting Partner",
    },
    {
      img: img33,
      title: "Recognized by GoodFirms.co",
    },
    {
      img: img34,
      title: "Recognized by TopDigital.Agency",
    },
    {
      img: img35,
      title: "Recognized by  TechReviewer.co",
    },
    {
      img: img36,
      title: "Hign Tech Park Resident",
    },
  ];
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <Title title={"Whitepapers"} color={"#fff"} />
          <p>
            SumatoSoft team shares its insights and experience in software
            development.
          </p>
        </div>
      </section>
      <section className={`${styles.cards} globalContainer`}>
        <div>
         <img src={img} alt="" />
         <img src={img} alt="" />
         <img src={img} alt="" />
         <img src={img} alt="" />
         <img src={img} alt="" />
        </div>
      </section>
      <section className={`${styles.rewards} globalContainer`}>
        <Title title={"Rewards & Recognitions"} />
        <div className={styles.rewardsCards}>
          {softCard.map((item) => (
            <SoftwareCard
              img={item.img}
              subtitle={item.title}
              clas={false}
              key={item.title}
            />
          ))}
        </div>
      </section>
      <ProjectAnalysis/>
    </>
  );
};

export default WhitePapers;

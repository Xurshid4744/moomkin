import React from "react";
import { Select } from "antd";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Title from "../../../components/Title/Title";
import styles from "./CaseStudio.module.scss";

import img1 from "../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../assets/images/kingbok.jpg";
import img3 from "../../../assets/images/it-park.jpg";
import img4 from "../../../assets/images/napa.png";
import img5 from "../../../assets/images/edcontrol.png";
import img6 from "../../../assets/images/adliya_vazirligi.png";

import img31 from "../../../assets/icons/sertificat-1.svg";
import img32 from "../../../assets/icons/sertificat-2.svg";
import img33 from "../../../assets/icons/sertificat-3.svg";
import img34 from "../../../assets/icons/sertificat-4.svg";
import img35 from "../../../assets/icons/sertificat-5.svg";
import img36 from "../../../assets/icons/sertificat-6.svg";
import SoftwareCard from "../../../components/Cards/SoftwareCard/SoftwareCard";
import ProjectAnalysis from "../../../components/ProjectAnalysis/ProjectAnalysis";

const CaseStudio = () => {
  const menu = [{ link: "", label: "Partfolio" }];
  const { Option } = Select;
  const option = [
    { value: "All solutions" },
    { value: "Enterprise" },
    { value: "Al & ML" },
    { value: "Blockchain" },
    { value: "IoT" },
    { value: "Startups" },
  ];
  const option2 = [
    { value: "All industries" },
    { value: "Ecommerse" },
    { value: "Elearing" },
    { value: "Financial" },
    { value: "Blockchain" },
    { value: "IoT" },
    { value: "Startups" },
  ];
  const allProjects = [
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5},
    {img: img6},
  ]
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
          <Title title={"Projects We Successfully Developed"} color={"#fff"} />
          <p>One look is worth a thousand words</p>
        </div>
      </section>
      <section className={styles.select}>
        <div className={`${styles.optinBox} globalContainer`}>
          <div className={styles.option}>
            <Select defaultValue="All solutions" style={{ width: "200px" }}>
              {option.map((item) => (
                <Option value={item.value}>{item.value}</Option>
              ))}
            </Select>
          </div>
          <div className={styles.option}>
            <Select defaultValue="All solutions" style={{ width: "200px" }}>
              {option2.map((item) => (
                <Option value={item.value}>{item.value}</Option>
              ))}
            </Select>
          </div>
        </div>
      </section>
      <section className={`${styles.projectBox} globalContainer`}>
            {allProjects.map(item =>(
              <img src={item.img} alt="" key={item.img} width={300} height={300}/>
            ))}
      </section>
      <section className={`${styles.rewards} globalContainer`}>
        <Title title={"Rewards & Recognitions"} />
        <p className={styles.rewardsTitle}>
          SumatoSoft has been recognized by the leading analytics agencies
          working with the best software development companies from all over the
          world. Our values and partners help us to provide the best services in
          the field.
        </p>
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

export default CaseStudio;

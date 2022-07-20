import React from "react";
import styles from "./Business.module.scss";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import AnimationText from "../../../components/AnimationText/AnimationText";
import Title from "../../../components/Title/Title";
import FlexCard from "../../../components/Cards/FlexCard/FlexCard";

import img1 from "../../../assets/icons/INDUSTRY-ANALYSIS.svg";
import img2 from "../../../assets/icons/TECHNICAL-RESEARCH.svg";
import img3 from "../../../assets/icons/COMPETITOR-ANALYSIS.svg";
import img4 from "../../../assets/icons/TECHNICAL-DOCUMENTATION.svg";

const BusinessAnalysis = () => {
  const menu = [
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Business Analysis",
      link: "",
    },
  ];
  const arr = [
    {
      img: img1,
      title: "INDUSTRY ANALYSIS",
      subtitle:
        "When developing a product, it is necessary to take into account features of the industry where it will be applied. Rules that work for one industry will not always work in the other. At the Discovery Phase, study of your industry specific business processes allows implementation of the best practices and tools.",
    },
    {
      img: img2,
      title: "TECHNICAL RESEARCH",
      subtitle:
        "There are no two identical projects and each product includes certain business and technical requirements that must be taken into account at the very early stages of development. The result of the Discovery Phase of the project will be a list of recommended technologies and frameworks to use.",
    },
    {
      img: img3,
      title: "COMPETITOR ANALYSIS",
      subtitle:
        "One of the parts of business analysis services is the research of your competitors, weak spots in their products, and improvements that can be implemented in your product to get a competitive advantage. ",
    },
    {
      img: img4,
      title: "TECHNICAL DOCUMENTATION",
      subtitle:
        "Tech specification is a crucial part of a project. The success and on-time completion of the project as well as its future development highly depends on how thoroughly the project is clarified and described, how correctly it is reflected in the technical specification.",
    },
  ];
  return (
    <>
      <section className={styles.container}>
        <div className={` ${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
        </div>
      </section>
      <AnimationText
        title={"48% of projects"}
        subtitle={
          "experience time or budget overruns because of poor and incomplete requirements."
        }
      />
      <section>
        <div style={{ paddingTop: "100px" }}>
          <Title title={"Must-Have Elements Of Discovery Phase Of Projects"} />
        </div>
        <div className={`${styles.cards} globalContainer`}>
          {arr.map((item) => (
            <FlexCard
              img={item.img}
              title={item.title}
              children={item.subtitle}
            />
          ))}
        </div>
      </section>
      <section className="globalContainer">
        <div style={{ paddingTop: "100px" }}>
          <Title title={"Our Business Analysis Services"} />
        </div>
        <p className={styles.title}>
          The Business Analysis Stage is a groundwork for every software
          development project. It is carried out by a business analyst and helps
          to reveal the project potential and estimate possible risks and
          assumptions, as well as to find the best technical solution and
          insights for the project implementation. That is what business
          analysis services are for. It is the first stage of every software
          development process, the value of which you cannot overstate.
        </p>
      </section>
    </>
  );
};

export default BusinessAnalysis;

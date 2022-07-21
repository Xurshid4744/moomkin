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

import img5 from "../../../assets/icons/REQUIREMENTS.svg";
import img6 from "../../../assets/icons/USER-INTERFACE.svg";
import img7 from "../../../assets/icons/PROTOTYPING.svg";
import img8 from "../../../assets/icons/DOCUMENTATION.svg";

import img9 from "../../../assets/images/mehrigiyo.jpg";
import img10 from "../../../assets/images/napa.png";
import img11 from "../../../assets/images/kingbok.jpg";
import img12 from "../../../assets/images/edcontrol.png";
import img13 from "../../../assets/images/adliya_vazirligi.png";
import img14 from "../../../assets/images/it-park.jpg";

import img15 from "../../../assets/images/img1.jpg";
import img16 from "../../../assets/images/img2.jpg";
import img17 from "../../../assets/images/img3.jpg";
import img18 from "../../../assets/images/img4.jpg";
import img19 from "../../../assets/images/img5.jpg";

import SmallSwiper from "../../../components/Swipers/SmallSwiper/SmallSwiper";
import TinySwiper from "../../../components/Swipers/TinySwiper/TinySwiper";
import BusinessResults from "../../../components/BusinessResults/BusinessResults";

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
  const businessCards = [
    {
      img: img5,
      title: "REQUIREMENTS DEFINITION AND CLARIFICATION",
      subtitle: (
        <div className={styles.businessCards}>
          <p>
            Capturing the right requirements at the Discovery Phase builds a
            solid foundation for its future success.
          </p>
          <ul>
            <li>Industry & competitor analysis</li>
            <li>Technical research</li>
            <li>Analysis</li>
            <li>Specification</li>
          </ul>
        </div>
      ),
    },
    {
      img: img6,
      title: "USER INTERFACE DESIGN AT THE HIGHEST LEVEL",
      subtitle: (
        <div className={styles.businessCards}>
          <p>
            Working out the most efficient user flow patterns to ensure the
            target actions are completed easily by each type of user.
          </p>
          <ul>
            <li>Information architecture (IA)</li>
            <li>Wireframes of major pages</li>
            <li>Reports</li>
          </ul>
        </div>
      ),
    },
    {
      img: img7,
      title: "PROTOTYPING AND PROOF-OF-CONCEPT WORK",
      subtitle: (
        <div className={styles.businessCards}>
          <p>
            Business analysts help to evaluate the potential and value of the
            future application to satisfy business needs and meet all business
            requirements
          </p>
          <ul>
            <li>UI prototype</li>
            <li>System prototype</li>
            <li>Detailed mockups</li>
          </ul>
        </div>
      ),
    },
    {
      img: img8,
      title: "DOCUMENTATION & ESTIMATION",
      subtitle: (
        <div className={styles.businessCards}>
          <p>
            All results of the Business Analysis Services will be recorded in
            one document - Requirements Specification (SRS) which includes
          </p>
          <ul>
            <li>Software requirements analysis</li>
            <li>Project risk assessment</li>
            <li>Feature list and mockups</li>
            <li>Implementation budget and deadline</li>
          </ul>
        </div>
      ),
    },
  ];
  const obj = {
    img1: img9,
    img2: img10,
    img3: img11,
    img4: img12,
    img5: img13,
    img6: img14,
    title: "Recent Projects We Made",
  };
  const images = [
    { img: img15, name: "foto" },
    { img: img16, name: "foto" },
    { img: img17, name: "foto" },
    { img: img18, name: "foto" },
    { img: img19, name: "foto" },
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
        <div>
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
        <div className={styles.cards}>
          {businessCards.map((item) => (
            <FlexCard
              img={item.img}
              title={item.title}
              children={item.subtitle}
            />
          ))}
        </div>
      </section>
     <SmallSwiper obj={obj} bg={"#ecf0f4"}/>
     <section>
      <Title title={"Business Analysis Services Results"}/>
      <div className={styles.analysis}>
            <BusinessResults/>
            <TinySwiper data={images}/>
      </div>
     </section>
    </>
  );
};

export default BusinessAnalysis;

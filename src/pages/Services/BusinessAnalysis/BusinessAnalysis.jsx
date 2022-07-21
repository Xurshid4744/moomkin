import React from "react";
import styles from "./Business.module.scss";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import AnimationText from "../../../components/AnimationText/AnimationText";
import Title from "../../../components/Title/Title";
import FlexCard from "../../../components/Cards/FlexCard/FlexCard";

import SmallSwiper from "../../../components/Swipers/SmallSwiper/SmallSwiper";
import TinySwiper from "../../../components/Swipers/TinySwiper/TinySwiper";
import BusinessResults from "../../../components/BusinessResults/BusinessResults";
import BigSwiper from "../../../components/Swipers/BigSwiper/BigSwiper";
import BusinessProcess from "../../../components/BusinessProcess/BusinessProcess";

import {
  arr,
  businessCards,
  images,
  menu,
  obj,
  process,
  results,
  swiper,
  softCard,
  acardion,
  headData
} from "./helpers";
import SoftwareCard from "../../../components/Cards/SoftwareCard/SoftwareCard";
import Acardion from "../../../components/Acardion/Acardion";
import HeadLine from "../../../components/HeadLine/HeadLine";

const BusinessAnalysis = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={` ${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.mainTitle}>
          <HeadLine data={headData}/>
          </div>
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
      <SmallSwiper obj={obj} bg={"#ecf0f4"} />
      <section className={`${styles.business} globalContainer`}>
        <Title title={"Business Analysis Services Results"} />
        <div className={styles.analysis}>
          <BusinessResults data={results} />
          <TinySwiper data={images} />
        </div>
        <p className={styles.title}>
          If you want to be sure that all the wishes for the future software
          product are taken into account and structured competently, you need a
          business analysis and we can do this for you. Our IT Business Analysts
          take you through a business analysis stage, after which you can
          already turn to product development without the risk of remaining
          incomprehensible or breaking deadlines! You can find our portfolio
          projects for business analysis below
        </p>
      </section>
      <section className={`${styles.bigSwiper} globalContainer`}>
        <Title title={"Our Happy Clients"} />
        <BigSwiper obj={swiper} />
      </section>
      <h6 className={styles.processTitle}>Process Of Business Analysis</h6>
      <section className={`${styles.process} globalContainer`}>
        <BusinessProcess data={process} />
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
      <section className={styles.acardionContainer}>
        <div className="globalContainer">
          <Title title={"Frequently Asked Questions"} />
          <p className={styles.acardionTitle}>
            Answers to commonly asked questions
          </p>
          <div className={styles.acardionBox}>
            <Acardion data={acardion} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessAnalysis;

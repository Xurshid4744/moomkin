import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import HeadLine from "../../../components/HeadLine/HeadLine";
import styles from "./index.module.scss";
import {
  headLine,
  menu,
  benefitsCard,
  flexCard,
  bigSwiper,
  technological,
  smallSwiper,
  animationCardLeft,
  animationCardRight,
  softCard,
  acardion
} from "./helpers";
import Title from "../../../components/Title/Title";
import SoftwareCard from "../../../components/Cards/SoftwareCard/SoftwareCard";
import FlexCard from "../../../components/Cards/FlexCard/FlexCard";
import BigSwiper from "../../../components/Swipers/BigSwiper/BigSwiper";
import DiscussProject from "../../../components/DiscussProject/DiscussProject";
import SmallSwiper from "../../../components/Swipers/SmallSwiper/SmallSwiper";
import CompanyProfile from "../../../components/CompanyProfile/CompanyProfile";
import AnimationCard from "../../../components/Cards/AnimationCard/AnimationCard";
import ProjectAnalysis from "../../../components/ProjectAnalysis/ProjectAnalysis";
import Acardion from "../../../components/Acardion/Acardion";
const FrontendDevelopment = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.headLine}>
            <HeadLine data={headLine} sizeTitle="45px">
              <p>
                Our front-end development team works on solutions of different
                complexity and deliver full cycle development services to make
                our clients' plans come true. We build reliable and scalable
                software.
              </p>
              <ul>
                <li>Responsive Web Interfaces</li>
                <li>Native Mobile Interfaces</li>
                <li>Quality Well-Structured Code</li>
                <li>No Code Redundancy</li>
              </ul>
            </HeadLine>
          </div>
        </div>
      </section>
      <section className={`${styles.benefits} globalContainer`}>
        <Title title={"Why SumatoSoft?"} />
        <div className={styles.benefitsBox}>
          {benefitsCard.map((item) => (
            <div className={styles.benefitsCard}>
              <SoftwareCard
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                clas={false}
              />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.flexContainer}>
        <div className="globalContainer">
          <Title title={"SumatoSoft Front-end Development Services"} />
          <div className={styles.flexBox}>
            {flexCard.map((item) => (
              <FlexCard img={item.img} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>
      <section className="globalContainer" style={{ paddingTop: "100px" }}>
        <Title title={"Our Happy Clients"} />
        <BigSwiper obj={bigSwiper} />
      </section>
      <DiscussProject />
      <section className={styles.technological}>
        <Title title={"Our Technological Expertise"} color={"white"} />
        <div className={`${styles.technologicalBox} globalContainer`}>
          {technological.map((item) => (
            <img src={item.img} alt="" />
          ))}
        </div>
      </section>
      <SmallSwiper obj={smallSwiper} />
      <CompanyProfile title={"DOWNLOAD OUR PORTFOLIO"} />
      <section className={`${styles.uxProcess} globalContainer`}>
        <Title title={"Front-End Development Services Process"} />

        <div className={`${styles.uxProcessBox} globalContainer`}>
          <div className={styles.uxProcessLeft}>
            {animationCardLeft.map((item) => (
              <AnimationCard
                img1={item.img1}
                img2={item.img2}
                title={item.title}
                text={item.text}
                ul={item.ul}
                data-aos="fade-right"
              />
            ))}
          </div>
          <div className={styles.uxProcessRight}>
            {animationCardRight.map((item) => (
              <AnimationCard
                img1={item.img1}
                img2={item.img2}
                text={item.text}
                title={item.title}
                ul={item.ul}
                left={true}
              />
            ))}
          </div>
          <span className={styles.uxProcessLine}>
            <span className={styles.item1}></span>
            <span className={styles.item2}></span>
            <span className={styles.item3}></span>
            <span className={styles.item4}></span>
          </span>
        </div>
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
      <ProjectAnalysis />
      <section className={styles.questions}>
        <div className={`${styles.questionsBox} globalContainer`}>
          <Title title={"Frequently Asked Questions"} />
          <p>Answers to commonly asked questions</p>
          <Acardion data={acardion} />
        </div>
      </section>

    </>
  );
};

export default FrontendDevelopment;

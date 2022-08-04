import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import HeadLine from "../../../components/HeadLine/HeadLine";
import styles from "./index.module.scss";
import {
  headLine,
  menu,
  animationText,
  results,
  tinySwiper,
  uxDesignCard,
  swpier,
  benefitsCard,
  bigSwiper,
  animationCardLeft,
  animationCardRight,
  acardion,
} from "./helpers";
import AnimationText from "../../../components/AnimationText/AnimationText";
import Title from "../../../components/Title/Title";
import BusinessResults from "../../../components/BusinessResults/BusinessResults";
import TinySwiper from "../../../components/Swipers/TinySwiper/TinySwiper";
import FlexCard from "../../../components/Cards/FlexCard/FlexCard";
import SmallSwiper from "../../../components/Swipers/SmallSwiper/SmallSwiper";
import CompanyProfile from "../../../components/CompanyProfile/CompanyProfile";
import DiscussProject from "../../../components/DiscussProject/DiscussProject";
import SoftwareCard from "../../../components/Cards/SoftwareCard/SoftwareCard";
import BigSwiper from "../../../components/Swipers/BigSwiper/BigSwiper";
import AnimationCard from "../../../components/Cards/AnimationCard/AnimationCard";
import Acardion from "../../../components/Acardion/Acardion";
const UiUxDesign = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.mainContainer} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.headContainer}>
            <HeadLine data={headLine} sizeTitle={"44px"} />
          </div>
        </div>
      </section>
      <div className={styles.animation}>
        <AnimationText
          title={animationText.title}
          subtitle={animationText.subtitle}
        />
      </div>
      <section className={`${styles.uxDesign} globalContainer`}>
        <Title title={"Why SumatoSoft UI and UX Design Services?"} />
        <div className={styles.uxDesignBox}>
          <div className={styles.uxDesignTitle}>
            <p className={styles.para}>
              Our approach to UI and UX design services is quite simple: we
              focus our efforts on how people will use products instead of just
              drawing a nice-looking interface.
            </p>
            <BusinessResults data={results} />
          </div>
          <TinySwiper data={tinySwiper} />
        </div>
      </section>
      <section className={`${styles.uxDesignCard} globalContainer`}>
        <Title title={"Our UI and UX Design Services"} />
        <div className={styles.uxDesignCardBox}>
          {uxDesignCard.map((item) => (
            <FlexCard
              img={item.img}
              title={item.title}
              children={item.children}
            />
          ))}
        </div>
      </section>
      <SmallSwiper obj={swpier} bg={"#ecf0f4"} />
      <CompanyProfile title={"DOWNLOAD OUR UI & UX APP DESIGN PORTFOLIO"} />
      <DiscussProject />
      <section className={`${styles.benefits} globalContainer`}>
        <Title title={"Benefits You Get From Work With Us"} />
        <p className={styles.benefitsTitle}>
          At SumatoSoft, we apply a full range of services to formulate
          effective customer retention strategies. We help brands to define
          their image through UI and UX design services and have a lasting
          impact, driving and motivating users to buy your product or services
          by providing a great user experience. User experience design services
          includ
        </p>
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
      <section className={styles.happyClients}>
        <div className={`globalContainer`}>
          <Title title={"Our Happy Clients"} />
          <BigSwiper obj={bigSwiper} />
        </div>
      </section>
      <section className={`${styles.uxProcess} globalContainer`}>
        <Title title={"UI and UX Design Process Explained"} />
        <p className={styles.uxTitle}>
          At SumatoSoft, we apply a full range of UI/UX services to formulate
          effective customer retention strategies. We help brands to define
          their image through UI design services and have a lasting impact,
          driving and motivating users to buy your product or services by
          providing a great user experience. User experience design services
          include:
        </p>
        <div className={`${styles.uxProcessBox} globalContainer`}>
          <div className={styles.uxProcessLeft}>
            {animationCardLeft.map((item) => (
              <AnimationCard
                img1={item.img1}
                img2={item.img2}
                title={item.title}
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
            <span className={styles.item5}></span>
          </span>
        </div>
      </section>
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

export default UiUxDesign;

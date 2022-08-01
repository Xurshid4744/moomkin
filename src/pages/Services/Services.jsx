import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import SoftwareCard from "../../components/Cards/SoftwareCard/SoftwareCard";
import HeadLine from "../../components/HeadLine/HeadLine";
import Title from "../../components/Title/Title";
import styles from "./Services.module.scss";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

import DiscussProject from "../../components/DiscussProject/DiscussProject";
import BigSwiper from "../../components/Swipers/BigSwiper/BigSwiper";
import SmallSwiper from "../../components/Swipers/SmallSwiper/SmallSwiper";
import FlexCard from "../../components/Cards/FlexCard/FlexCard";
import AnimationCard from "../../components/Cards/AnimationCard/AnimationCard";
import ProjectAnalysis from "../../components/ProjectAnalysis/ProjectAnalysis";
import Acardion from "../../components/Acardion/Acardion";

import {
  acardion,
  animationCardLeft,
  animationCardRight,
  benefitsCard,
  bigSwiper,
  features,
  flexCard,
  headLine,
  industryCard,
  menu,
  smallSwiper,
  softCard,
} from "./helpers";
const Services = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.headLine}>
            <HeadLine data={headLine} hidden={true} sizeTitle="45px">
              <p>
                Using best IT innovations, we develop custom web and mobile
                applications that increase our customers’ competitive benefits
                and improve their business efficiency. We offer full-cycle
                software development services of unmatched quality and build
                reliable and transparent cooperation.
              </p>
              <ul>
                <li>Business Analysis</li>
                <li>App Design</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>QA & Testing</li>
                <li>Code Review</li>
                <li>Rescue Missions</li>
              </ul>
            </HeadLine>
          </div>
        </div>
      </section>
      <section className={`${styles.benefits} globalContainer`}>
        <Title title={"Custom Software Solutions Built With Professionals"} />
        <p>
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
      <section className={`${styles.professionals} globalContainer`}>
        <Title title={"Custom Software Solutions Built With Professionals"} />
        <p>
          Our team consists of 70% senior specialists with a vast background in
          their professional careers. We have top engineers, business analysts,
          designers, and quality assurance specialists who are led by talented
          honest managers who worked with 27 countries from multiple
          geographical regions: Asia, the USA, and Europe. We are ready to
          deliver top-notch custom web application development services - so
          don’t hesitate to contact us!
        </p>
        <div className={styles.images} data-aos="flip-up">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </section>
      <section className={`${styles.industry} globalContainer`}>
        <Title title={"Industry-Specific Application Development Services"} />
        <p>
          We develop multi-integrated, easily customizable and fully
          controllable web applications tailored to specific industries applying
          not only the latest technical trends, but also peculiarities of each
          business domain.
        </p>
        <div className={styles.industryBox}>
          {industryCard.map((item) => (
            <SoftwareCard
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              clas={false}
            />
          ))}
        </div>
      </section>

      <DiscussProject />

      <div className="globalContainer" style={{ paddingTop: "100px" }}>
        <Title title={"Success Stories Which Inspire"} />
        <BigSwiper obj={bigSwiper} />
      </div>
      <SmallSwiper obj={smallSwiper} bg={"#ecf0f4"} />
      <section className={styles.flexContainer}>
        <div className="globalContainer">
          <Title title={"Custom Web Application Development Services"} />
          <div className={styles.flexBox}>
            {flexCard.map((item) => (
              <FlexCard img={item.img} title={item.text} color={"#2678bd"}>
                <div>
                  <p>{item.children.p}</p>
                  <ul>
                    {item.children.ul.map((item) => (
                      <li>{item.li}</li>
                    ))}
                  </ul>
                </div>
              </FlexCard>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className={`${styles.featuresBox} globalContainer`}>
          <Title
            title={"Our Custom Web Application Development Features"}
            color={"#fff"}
          />
          <div className={styles.featuresCards}>
            {features.map((item) => (
              <SoftwareCard
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                key={item.title}
              />
            ))}
          </div>
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
            <span className={styles.item6}></span>
            <span className={styles.item7}></span>
          </span>
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

export default Services;

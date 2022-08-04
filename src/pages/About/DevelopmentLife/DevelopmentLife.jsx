import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import DiscussProject from "../../../components/DiscussProject/DiscussProject";
import Title from "../../../components/Title/Title";
import styles from "./DevelopmentLife.module.scss";
import img from "../../../assets/icons/Lifce-Cycle.svg";
import AnimationCard from "../../../components/Cards/AnimationCard/AnimationCard";

import img37 from "../../../assets/icons/Research3.svg";
import img38 from "../../../assets/icons/Quality-Assurance.svg";
import img39 from "../../../assets/icons/Deployment.svg";
import img40 from "../../../assets/icons/Design.svg";

import recenSoftwareImg1 from "../../../assets/images/recenSoftwareImg1.png";
import recenSoftwareImg2 from "../../../assets/images/recenSoftwareImg2.jpg";
import recenSoftwareImg3 from "../../../assets/images/recenSoftwareImg3.jpg";
import recenSoftwareImg4 from "../../../assets/images/recenSoftwareImg4.jpg";
import recenSoftwareImg5 from "../../../assets/images/recenSoftwareImg5.jpg";
import recenSoftwareImg6 from "../../../assets/images/recenSoftwareImg6.jpg";
import SmallSwiper from "../../../components/Swipers/SmallSwiper/SmallSwiper";
import BigSwiper from "../../../components/Swipers/BigSwiper/BigSwiper";
import ProjectAnalysis from "../../../components/ProjectAnalysis/ProjectAnalysis";
const DevelopmentLife = () => {
  const menu = [{ link: "", label: "Software Development Life Cycle" }];
  const animationCardLeft = [
    {
      img1: img37,
      children: (
        <div>
          <h4>Phase 1: Application requirement analysis</h4>
          <p>
            The requirement collection and business is the first stage in the
            web and mobile application development process. It is performed by
            the senior team of business analysts, technical architects and
            project managers together with all the business stakeholders and
            domain experts in the industry.
          </p>
          <ul style={{ paddingTop: "10px" }}>
            <li>Scope definition of the entire project</li>
            <li>Planning for the quality assurance requirements</li>
            <li>Definition of anticipated issues, opportunities</li>
            <li>Recognition of the risks involved</li>
            <li>Timeline definition</li>
          </ul>
        </div>
      ),
    },
    {
      img1: img38,
      children: (
        <div>
          <h4>Phase 3: Design</h4>
          <p>
            Based on the SRS document the team prepares the system and software
            design to define the whole IT system architecture. This design phase
            will be a base for the next coding phase.
          </p>
          <p style={{ paddingTop: "10px" }}>
            There are two types of design documents that are developed:
          </p>
          <p style={{ paddingTop: "10px" }}>
            <b>High-Level Design (HLD)</b>
          </p>
          <ul>
            <li>Brief description of each module and its functionality</li>
            <li>Dependencies between modules</li>
            <li>Database tables & their main elements</li>
            <li>Architecture diagrams</li>
            <li>Technology details</li>
          </ul>
          <p style={{ paddingTop: "10px" }}>
            <b>Low-Level Design(LLD)</b>
          </p>
          <ul>
            <li>Functional modules logic</li>
            <li>Detailed database tables</li>
            <li>Complete interface detail</li>
            <li>Complete modules input and outputs</li>
          </ul>
        </div>
      ),
    },
    {
      img1: img37,
      children: (
        <div>
          <h4>Phase 5: Testing</h4>
          <p>
            Once some part of the software coding is complete, it is sent for
            testing and the QA team starts testing the functionality to verify
            that the application works following the requirements.
          </p>
          <p style={{ paddingTop: "10px" }}>The process is the following:</p>
          <ul style={{ paddingTop: "10px" }}>
            <li>QA team finds some issues;</li>
            <li>QA team sends them to the dev team;</li>
            <li>Dev deam fixes the issues;</li>
            <li>QA team rechecks the functionality.</li>
          </ul>
        </div>
      ),
    },
    {
      img1: img37,
      children: (
        <div>
          <h4>Phase 7: Maintenance</h4>
          <p>
            After the release, the application continues its cycle following 3
            possible ways:
          </p>
          <ul style={{ paddingTop: "10px" }}>
            <li>Bug fixing</li>
            <li>Software upgrade</li>
            <li>Enhancement with new features</li>
          </ul>
        </div>
      ),
    },
  ];

  const animationCardRight = [
    {
      img1: img37,
      children: (
        <div>
          <h4>Phase 2: Feasibility study</h4>
          <p>
            When the requirement analysis phase is done the next step is to
            define and document software needs in the 'Software Requirement
            Specification' 'SRS' document. It has everything which ought to be
            structured and created during the application development life
            cycle.
          </p>
          <p style={{ paddingTop: "10px" }}>
            There are main five types of feasibilities checks:
          </p>
          <ul style={{ paddingTop: "10px" }}>
            <li>Economic</li>
            <li>Legal</li>
            <li>Operation</li>
            <li>Technical</li>
            <li>Schedule</li>
          </ul>
        </div>
      ),
    },
    {
      img1: img37,
      children: (
        <div>
          <h4>Phase 4: Coding</h4>
          <p>
            The next phase is coding itself - the longest phase of the software
            development life cycle.
          </p>
          <p style={{ paddingTop: "10px" }}>Peculiarities of the phase:</p>
          <ul style={{ paddingTop: "10px" }}>
            <li>Developers should follow some predified coding guidelines.</li>
            <li>
              The whole development is divided into tasks for specific modules
              development.
            </li>
          </ul>
        </div>
      ),
    },
    {
      img1: img37,
      children: (
        <div>
          <h4>Phase 6: Deployment</h4>
          <p>
            Once the software is developed and fully tested, the final
            deployments process is launched..
          </p>
          <p style={{ paddingTop: "10px" }}>
            QA team checks the software on the production environment.
          </p>
        </div>
      ),
    },
  ];

  const smallSwiper = {
    img1: recenSoftwareImg6,
    img2: recenSoftwareImg5,
    img3: recenSoftwareImg4,
    img4: recenSoftwareImg3,
    img5: recenSoftwareImg2,
    img6: recenSoftwareImg1,
    title: "Our Recent Works",
  };
  const bigSwiper = [
    {
      img: recenSoftwareImg2,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      title: `SumatoSoft team not only knew well how to build a partnership-based working process, but also offered sensible suggestions and advice helping us to reach the long-term business goals.We are completely satisfied with the results of our cooperation and will be happy to recommend SumatoSoft as a reliable and competent partner for development of web-based solutions.`,
    },
  ];
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <Title title={"Application Development Life Cycle"} color={"#fff"} />
          <p>
            SumatoSoft will take you through every stage of the software
            development process (SDLC) – from a business analysis stage through
            UX/UI and application development to deployment and ongoing support.
          </p>
        </div>
      </section>
      <DiscussProject />
      <div className={`${styles.images} globalContainer`}>
        <img src={img} alt="" width={800} />
      </div>

      <section className={`${styles.uxProcess} globalContainer`}>
        <Title title={"Application Development Life Cycle Explained"} />

        <div className={`${styles.uxProcessBox} globalContainer`}>
          <div className={styles.uxProcessLeft}>
            {animationCardLeft.map((item) => (
              <AnimationCard
                img1={item?.img1}
                children={item.children}
                data-aos="fade-right"
              />
            ))}
          </div>
          <div className={styles.uxProcessRight}>
            {animationCardRight.map((item) => (
              <AnimationCard
                img1={item.img1}
                children={item.children}
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
      <SmallSwiper obj={smallSwiper} />
      <div className="globalContainer">
        <BigSwiper obj={bigSwiper} />
      </div>
      <ProjectAnalysis/>
    </>
  );
};

export default DevelopmentLife;

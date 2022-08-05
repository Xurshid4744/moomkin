import React, { useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import DiscussProject from "../../../components/DiscussProject/DiscussProject";
import HeadLine from "../../../components/HeadLine/HeadLine";
import Title from "../../../components/Title/Title";
import styles from "./DevelopmentProcess.module.scss";
import SmallSwiper from "../../../components/Swipers/SmallSwiper/SmallSwiper";
import ProjectAnalysis from "../../../components/ProjectAnalysis/ProjectAnalysis";

import img1 from "./../../../assets/images/mehrigiyo.jpg";
import img2 from "./../../../assets/images/napa.png";
import img3 from "./../../../assets/images/kingbok.jpg";
import img4 from "./../../../assets/images/edcontrol.png";
import img5 from "./../../../assets/images/adliya_vazirligi.png";
import img6 from "./../../../assets/images/it-park.jpg";
import scrumdesktop from "./../../../assets/images/scrumdesktop.svg";
import kanban from "./../../../assets/images/kanban.svg";
import adaptibility from "./../../../assets/images/adaptibility.svg";
import feedback from "./../../../assets/images/feedback.svg";
import colla from "./../../../assets/images/colla.svg";
import estimation from "./../../../assets/images/estimation.svg";
import workflow from "./../../../assets/images/workflow.svg";
import overproduction from "./../../../assets/images/overproduction.svg";
import estiminventoryation from "./../../../assets/images/inventory.svg";
import responsiveness from "./../../../assets/images/responsiveness.svg";
import SoftwareCard from "../../../components/Cards/SoftwareCard/SoftwareCard";

function DevelopmentProcess() {
  const [scrum, setSrum] = useState(true);

  const headLine = {
    title: "Application Development Made Simple & Transparent",
  };

  const menu = [
    {
      link: "",
      label: "Development Process",
    },
  ];

  const data = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    title: "Recent Projects We Made",
  };

  const cards = [
    {
      img: adaptibility,
      title: "FAST ADAPTABILITY",
      subtitle:
        "The software development process is easily adapted to changing requirements. It becomes transparent, flexible, and adjustable.",
    },
    {
      img: feedback,
      title: "REGULAR FEEDBACK",
      subtitle:
        "The system of sprints encourages regular feedback within the team and to clients. The clients are always aware of the development progress.",
    },
    {
      img: colla,
      title: "BETTER COLLABORATION",
      subtitle:
        "Scrum framework encourages tight and clear collaboration and communication between all parties (team, clients, stakeholders).",
    },
    {
      img: estimation,
      title: "EASY ESTIMATION",
      subtitle:
        "It is easy to estimate the levels of work involved as all features are estimated in points - relative quantity of effort required.",
    },
  ];

  const grey = [
    {
      img: workflow,
      title: "IMPROVED WORKFLOW",
      subtitle:
        "Visually organized environment ensures all tasks and materials are easily found and continually stocked.",
    },
    {
      img: overproduction,
      title: "LESS OVERPRODUCTION",
      subtitle:
        "The development team doesn't start and doesn’t commit to many tasks at once preventing overproduction.",
    },
    {
      img: estiminventoryation,
      title: "NO OBSOLETE INVENTORY",
      subtitle:
        "The inventory is only created in case of need minimizing risk of obsolete efforts (and as a result, wasted time and money).",
    },
    {
      img: responsiveness,
      title: "BETTER RESPONSIVENESS",
      subtitle:
        "Kanban has an improved responsiveness to changes in demand and high responsiveness.",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.txt}>
            <Title
              title={"Let’s Build Agile App Development Cycle"}
              color={"white"}
            />
            <p className={`${styles.p}`}>
              You will be involved in the app development process from the word
              go till the release day. We believe that clients should be active
              participants in the whole development cycle, controlling the
              progress and having an opportunity to make corrections at any
              stage. Scrum and Kanban methodologies we follow fit the best to
              this mission.
            </p>
          </div>
        </div>
      </div>

      {/* body */}
      <DiscussProject />
      <div className={styles.body}>
        <Title title={"Agile Frameworks We Follow"} />
        <div className={styles.methodology}>
          <div
            className={!scrum ? styles.dotted : styles.solid}
            onClick={() => setSrum(true)}
          >
            SCRUM
          </div>
          <div
            className={scrum ? styles.dotted : styles.solid}
            onClick={() => setSrum(false)}
          >
            KANBAN
          </div>
        </div>
        {scrum ? (
          <section className={styles.scrumsec}>
            <p className={`${styles.p} globalContainer`}>
              Scrum is "a flexible, holistic product development strategy where
              a development team works as a unit to reach a common goal".
            </p>
            <div>
              <img src={scrumdesktop} alt="" />
            </div>
            <div style={{ marginTop: "200px" }}>
              <Title title={"Benefits Of Scrum Framework"} />
            </div>
            <div className={`${styles.InfoCards} globalContainer`}>
              {cards.map((item) => (
                <div className={styles.Cards}>
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
        ) : (
          <section className={styles.scrumsec}>
            <p className={`${styles.p} globalContainer`}>
              Kanban is a way to manage the software development cycle with the
              emphasis on continual delivery without overburdening the team.
              Kanban is invented to help teams work together more effectively.
            </p>
            <div>
              <img src={kanban} alt="" />
            </div>
            <div style={{ marginTop: "200px" }} className={styles.greycard}>
              <Title title={"Benefits Of Kanban Framework"} />
            
            <div className={`${styles.InfoCards} globalContainer`}>
              {grey.map((item) => (
                <div className={styles.Cards}>
                  <SoftwareCard
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    clas={false}
                  />
                </div>
              ))}
            </div>
            </div>
          </section>
        )}

        <div className={`${styles.made}`}>
          <SmallSwiper obj={data} />
        </div>
        <div className={styles.download}>
          <h1>DOWNLOAD SCRUM OVERVIEW</h1>
        </div>
        <div className={styles.blueAsk}>
          <ProjectAnalysis />
        </div>
      </div>
    </>
  );
}

export default DevelopmentProcess;

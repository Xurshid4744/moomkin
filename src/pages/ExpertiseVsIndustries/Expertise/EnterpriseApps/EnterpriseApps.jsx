import React from "react";
import styles from "./EnterpriseApps.module.scss";
import Title from "../../../../components/Title/Title";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";

import EnterpriseCard from "./../../../../assets/images/InfoCard.svg";
import ManufacturingCard from "./../../../../assets/images/ManufacturingCard.svg";
import RelationshipCard from "./../../../../assets/images/RelationshipCard.svg";
import OrderCard from "./../../../../assets/images/OrderCard.svg";
import WorkflowCard from "./../../../../assets/images/WorkflowCard.svg";
import HumanResourceCard from "./../../../../assets/images/HumanResourceCard.svg";
import DocumentCard from "./../../../../assets/images/DocumentCard.svg";
import FinancialCard from "./../../../../assets/images/FinancialCard.svg";
import ForecastingCard from "./../../../../assets/images/Forecasting.svg";
import Automation from "./../../../../assets/images/Automation.png";
import Integration from "./../../../../assets/images/Integration.svg";
import Collaboration from "./../../../../assets/images/Collaboration.svg";
import Security from "./../../../../assets/images/Security.svg";
import AI from "./../../../../assets/images/AI.svg";
import DataScience from "./../../../../assets/images/DataScience.svg";
import NetOfThings from "./../../../../assets/images/NetOfThings.svg";
import MachineLearning from "./../../../../assets/images/MachineLearning.svg";
import Haverman from "./../../../../assets/images/Haverman.png";
import Karbushev from "./../../../../assets/images/Karbushev.jpg";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";
import ProjectAnalysis from "../../../Home/_components/ProjectAnalysis/ProjectAnalysis";

const EnterpriseApps = () => {
  const cards = [
    {
      img: EnterpriseCard,
      title: "ENTERPRISE INFORMATION PORTALS",
      subtitle:
        "Get a secure and unified access point to integrated data, users, and processes across organizational boundaries.",
    },
    {
      img: RelationshipCard,
      title: "CUSTOMER RELATIONSHIP MANAGEMENT",
      subtitle:
        "Organize and synchronize sales and marketing activities with customer service and tech support to manage interactions in the best way.",
    },
    {
      img: DocumentCard,
      title: "DOCUMENT MANAGEMENT SYSTEMS",
      subtitle:
        "Build corporate systems for data, document, and knowledge management to organize, use, and store corporate content in the most efficient way.  ",
    },
    {
      img: HumanResourceCard,
      title: "HUMAN RESOURCE MANAGEMENT",
      subtitle:
        "Automate recruiting processes and track employee resumes, abilities and skills, salary, and accomplishments with a custom HRM system.",
    },
    {
      img: WorkflowCard,
      title: "WORKFLOW MANAGEMENT SYSTEMS",
      subtitle:
        "Automate business processes by drawing a complete picture of the internal and external workflow processes that are in place.",
    },
    {
      img: FinancialCard,
      title: "FINANCIAL & ACCOUNTING MANAGEMENT",
      subtitle:
        "Consolidate all financial data about costs, budgets, payments in one place, and make accounting processes easier and more effective.",
    },
    {
      img: OrderCard,
      title: "ORDER TRACKING & PROCESSING SYSTEMS",
      subtitle:
        "Automate the entire order process, from order entry to shipping and tracking sales commissioning with complete accuracy, visibility, and efficiency.",
    },
    {
      img: ManufacturingCard,
      title: "MANUFACTURING AND SUPPLY CHAIN MANAGEMENT",
      subtitle:
        "Drive business efficiency and keep profitability up by streamlining supply and manufacturing processes.",
    },
  ];

  const bluecard = [
    {
      img: ForecastingCard,
      title: "FORECASTING AND DECISION MAKING",
      subtitle:
        "Top-level management support by providing real-time data for decision-making.",
    },
    {
      img: Automation,
      title: "BUSINESS PROCESSES AUTOMATION",
      subtitle:
        "Automation of the business operations including payment and manufacturing processes.",
    },
    {
      img: Integration,
      title: "DATA CENTRALIZATION & INTEGRATION",
      subtitle:
        "Integration of the different departments ensures better communication, productivity, and efficiency.",
    },
    {
      img: Collaboration,
      title: "COLLABORATION MANAGEMENT",
      subtitle:
        "Bringing new opportunities for collaboration and interconnection within the company.",
    },
    {
      img: Security,
      title: "IMPROVED DATA SAFETY & SECURITY",
      subtitle:
        "Ensuring key enterprise data safety thanks to a common control system and security access.",
    },
  ];

  const tech = [
    {
      img: AI,
      title: "Artificial Intelligence",
    },
    {
      img: DataScience,
      title: "Big Data & Data Science",
    },
    {
      img: NetOfThings,
      title: "Machine Learning",
    },
    {
      img: MachineLearning,
      title: "Internet of Things",
    },
  ];

  const obj = [
    {
      img: Haverman,
      name: "Yury Haverman",
      position: "BoxForward",
      job: "Founder",
      title:
        "SumatoSoft team not only knew well how to build a partnership-based working process, but also offered sensible suggestions and advice helping us to reach the long-term business goals.We are completely satisfied with the results of our cooperation and will be happy to recommend SumatoSoft as a reliable and competent partner for development of web-based solutions.",
    },
    {
      img: Karbushev,
      name: "Michael Karbushev",
      position: "Evolv",
      job: "Senior Director of Engineering",
      title:
        "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    },
  ];
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.body}>
        <div>
          <Title title={"Custom Enterprise Software We Develop"} />
        </div>
        <div>
          <p className={styles.p}>
            SumatoSoft specializes in custom enterprise software development
            strengthening companies with the high-tech solutions <br /> of
            business processes automation.
          </p>
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
        <div className={`${styles.softwareProcess}globalContainer`}>
          <Title title={"Our Enterprise Software Development Process"} />
        </div>
        <div className={styles.benefits}>
          <Title
            color={"white"}
            title={"Benefits Custom Enterprise Software Development Bring"}
          />
          <p className={`${styles.p} ${styles.pp}`}>
            With the help of custom enterprise applications, we help our clients
            streamline business processes across manufacturing, <br />{" "}
            procurement, services, sales, finance, and HR management by building
            complex, customizable, scalable, and secure ERP <br /> systems.
          </p>
          <div className={`${styles.blueCards} globalContainer`}>
            {bluecard.map((item) => (
              <div>
                <SoftwareCard
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  hcolor={"white"}
                  pcolor={"white"}
                  clas={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.made}>
          <Title title={"Recent Software We Made"} />
          <div></div>
        </div>
        <div className={`${styles.swiper}`}>
          <div className={`${styles.innerCont} globalContainer`}>
            <div>
              <Title title={"Happy Clients Say"} />
            </div>
            <div>
              <BigSwiper obj={obj} />
            </div>
            <div>
              <Title title={"Tools & Technologies We Use"} />
            </div>
            <p style={{ padding: "50px" }} className={styles.p}>
              SumatoSoft always tracks the emergence of new technologies to
              apply in technologically advanced custom enterprise software{" "}
              <br /> development. The latest technologies bring you lots of
              benefits, from advanced security with blockchain to reliable
              automation with AI and <br /> ML algorithms.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {tech.map((item) => (
                <div>
                  <SoftwareCard img={item.img} title={item.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={{ padding: "100px" }}>
            <Title title={"Frequently Asked Questions"} />{" "}
            <p className={styles.p}>Answers to commonly asked questions</p>
          </div>
        </div>
        <div className={styles.blueAsk}>
          
          
          <ProjectAnalysis/>
        </div>
      </div>
    </>
  );
};

export default EnterpriseApps;

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
import Discovery from "./../../../../assets/images/Discovery.svg";
import Development from "./../../../../assets/images/Development.svg";
import Support from "./../../../../assets/images/Support.svg";
import img1 from "../../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../../assets/images/napa.png";
import img3 from "../../../../assets/images/kingbok.jpg";
import img4 from "../../../../assets/images/edcontrol.png";
import img5 from "../../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../../assets/images/it-park.jpg";
import Haverman from "./../../../../assets/images/Haverman.png";
import Karbushev from "./../../../../assets/images/Karbushev.jpg";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";
import FlexCard from "../../../../components/Cards/FlexCard/FlexCard";
import ProjectAnalysis from "../../../../components/ProjectAnalysis/ProjectAnalysis";
import BreadCrumb from "./../../../../components/BreadCrumb/BreadCrumb";
import HeadLine from "../../../../components/HeadLine/HeadLine";
import Acardion from "../../../../components/Acardion/Acardion";
import SmallSwiper from "../../../../components/Swipers/SmallSwiper/SmallSwiper";

const EnterpriseApps = () => {
  const menu = [
    { 
      link: "", label: "Expertise & Industries" 
    },
    { 
      link: "", label: "Enterprise Software Development" 
    }
];

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

  const headLine = [];

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

  const flexCard = [
    {
      img: Discovery,
      title: "DISCOVERY",
      children:
        "Our team of business analysts, system architects, and project managers during the Discovery phase understand, define, and take down the project vision, main business processes, and project requirements",
    },
    {
      img: Development,
      title: "DEVELOPMENT",
      children:
        "SumatoSoft professionals work on the project implementation using the best technologies and approaches In design, development, and quality assurance.",
    },
    {
      img: Support,
      title: "SUPPORT",
      children:
        "We implement long-term support and maintenance to ensure the stable work of software resulting in the enhancement of our clients' businesses.",
    },
  ];

  const faqs = [
    {
      title: "What is IoT development?",
      text: 'The Internet of Things (IoT) is a network of physical objects, devices ("things") embedded with sensors, software, and other technologies. The purpose of IoT software development is to connect and exchange data with other devices and systems over the Internet',
    },
    {
      title: "What are the fundamental components of IoT?",
      text: "All complete Internet of Things (IoT) systems are composed of four different components: sensors/devices, connectivity, data processing, and user interface. Some Internet of Things software development projects may require other layers (e.g. security, technology and governance standards, etc) but these four components represent the foundation of every IoT solution.",
    },
    {
      title: "Is the IoT secure?",
      text: "Each connected IoT device collects data, sometimes very sensitive personal or business data (e.g. healthcare). Therefore, businesses using Internet of Things solutions and IoT software development companies should pay special attention to network protection. If you work with professional Internet of Things software development provider, they will be able to manage and protect you from the following top IoT security risks:",
    },
    {
      title: "How Much Does IoT Development Cost?",
      text: "The cost of IoT solutions will consist of 2 main parts - device cost and the Internet of Things software development cost (connectivity, data processing, and user interface development). Device cost will vary depending on if it is a ready-made device or sensor or an absolutely custom and innovative device. IoT software development cost will highly depend on the application scope and usually starts at $20K for an MVP.",
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
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.headLine}>
            <HeadLine data={headLine} hidden={true} sizeTitle="45px">
              <h1>Enterprise Software Development</h1>
              <p>
                With deep expertise in full-cycle corporate software
                development, SumatoSoft improves and automates businesses with
                unmatched enterprise applications characterized by 3 specific
                attributes.
              </p>
              <div>
                <h3>BUSINESS GOALS ORIENTATION</h3>
                <p>
                  Any enterprise software is to sustain continuous operation and
                  to be utterly flexible for further scalability.
                </p>
              </div>
              <div>
                <h3>COMPLEX SOLUTIONS</h3>
                <p>
                  Custom Enterprise software handle big data, extensive parallel
                  processing, and network distributed resources.
                </p>
              </div>
              <div>
                <h3>BEST PRACTICES</h3>
                <p>
                  Corporate software should be based on and should apply the
                  most effective ways of building business and software.
                </p>
              </div>
            </HeadLine>
          </div>
        </div>
      </div>
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
        <div className={`${styles.softwareProcess} globalContainer`}>
          <Title title={"Our Enterprise Software Development Process"} />
          <div className={styles.flexCard}>
            {flexCard.map((item) => (
              <div className={styles.asdas}>
                <FlexCard
                  img={item.img}
                  title={item.title}
                  children={item.children}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.benefits}>
          <Title
            color={"white"}
            title={"Benefits Custom Enterprise Software Development Bring"}
          />
          <p className={`${styles.p} ${styles.pp}`}>
            With the help of custom enterprise applications, we help our clients
            streamline business processes across manufacturing, <br />=
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
        <SmallSwiper obj={data} />
        </div>
        <div className={`${styles.swiper}`}>
          <div className={`${styles.innerCont} globalContainer`}>
            <div>
              <Title title={"Happy Clients Say"} />
            </div>
            <div>
              <BigSwiper obj={obj} />
            </div>
          </div>
        </div>
        <div>
          <div style={{ padding: "100px" }}>
            <Title title={"Frequently Asked Questions"} />{" "}
            <p className={styles.p}>Answers to commonly asked questions</p>
          </div>
          <div className="globalContainer">

          <Acardion data={faqs} />
          </div>
        </div>
        <div className={styles.blueAsk}>
          <ProjectAnalysis />
        </div>
      </div>
    </>
  );
};

export default EnterpriseApps;

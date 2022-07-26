import React from "react";
import styles from "./MobileApps.module.scss";
import Title from "../../../../components/Title/Title";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";
import DiscussProject from "../../../../components/DiscussProject/DiscussProject";
import TinySwiper from "../../../../components/Swipers/TinySwiper/TinySwiper";

import EnterpriseCard from "./../../../../assets/icons/native.svg";
import DocumentCard from "./../../../../assets/icons/hybrid.svg";
import RelationshipCard from "./../../../../assets/icons/progressive.svg";
import HumanResourceCard from "./../../../../assets/icons/wearable.svg";
import adTech from "./../../../../assets/icons/adTech.svg";
import elearning from "./../../../../assets/icons/elearning.svg";
import ecommerce from "./../../../../assets/icons/ecomerce.svg";
import transportation from "./../../../../assets/icons/transportation.svg";
import PLANNING from "./../../../../assets/icons/PLAN.svg";
import PROTOTYPING from "./../../../../assets/icons/PROTO.svg";
import Design from "./../../../../assets/icons/Design.svg";
import DEVELOPMENT from "./../../../../assets/icons/DEVELOPMENT.svg";
import TESTING from "./../../../../assets/icons/TESTING.svg";
import SUPPORT from "./../../../../assets/icons/SUPPORT.svg";
import strategys from "./../../../../assets/icons/strategy.svg";
import approach from "./../../../../assets/icons/approach.svg";
import technologies from "./../../../../assets/icons/texhnologies.svg";
import guarante from "./../../../../assets/icons/guarante.svg";
import Haverman from "./../../../../assets/images/Haverman.png";
import galka from "../../../../assets/icons/Glalka.svg";
import Karbushev from "./../../../../assets/images/Karbushev.jpg";
import img01 from "../../../../assets/images/img1.jpg";
import img02 from "../../../../assets/images/img2.jpg";
import img03 from "../../../../assets/images/img3.jpg";
import img04 from "../../../../assets/images/img4.jpg";
import img05 from "../../../../assets/images/img5.jpg";
import img06 from "../../../../assets/images/img6.jpg";
import img1 from "../../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../../assets/images/napa.png";
import img3 from "../../../../assets/images/kingbok.jpg";
import img4 from "../../../../assets/images/edcontrol.png";
import img5 from "../../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../../assets/images/it-park.jpg";
import SmallSwiper from "../../../../components/Swipers/SmallSwiper/SmallSwiper";
import Acardion from "../../../../components/Acardion/Acardion";
import ProjectAnalysis from "../../../../components/ProjectAnalysis/ProjectAnalysis";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";

const MobileApps = () => {

  const menu = [
    {
      link: "",
      label: "Expertise & Industries",
    },
    {
      link: "",
      label: "Mobile Applications Development",
    },
  ];

  const cards = [
    {
      img: EnterpriseCard,
      title: "NATIVE MOBILE APP DEVELOPMENT",
      subtitle:
        "Native development implies superior user experience and the best performance. We offer high-quality native mobile development for iOS and Android for a reasonable price.",
    },
    {
      img: RelationshipCard,
      title: "HYBRID MOBILE APP DEVELOPMENT",
      subtitle:
        "Thanks to the latest technologies we can develop hybrid applications which are a blend of native and web apps and work well both on the web and mobile.",
    },
    {
      img: DocumentCard,
      title: "PROGRESSIVE WEB APP DEVELOPMENT",
      subtitle:
        "Make a step further than your competitor with our custom mobile app development services and get a competitive advantage by building a progressive web application, the most modern application type on the market. ",
    },
    {
      img: HumanResourceCard,
      title: "WEARABLE AND EMBEDDED SOFTWARE DEVELOPMENT",
      subtitle:
        "We apply the best IT technologies to create applications for the smallest devices on the market, like smart things, watches, and for embedded systems.",
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

  const mobile = [
    {
      img: adTech,
      title: "AdTech & Marketing",
      subtitle:
        "Native development implies superior user experience and the best performance. We offer high-quality native mobile development for iOS and Android for a reasonable price.",
    },
    {
      img: elearning,
      title: "NATIVE MOBILE APP DEVELOPMENT",
      subtitle:
        "Native development implies superior user experience and the best performance. We offer high-quality native mobile development for iOS and Android for a reasonable price.",
    },
    {
      img: ecommerce,
      title: "NATIVE MOBILE APP DEVELOPMENT",
      subtitle:
        "Native development implies superior user experience and the best performance. We offer high-quality native mobile development for iOS and Android for a reasonable price.",
    },
    {
      img: transportation,
      title: "NATIVE MOBILE APP DEVELOPMENT",
      subtitle:
        "Native development implies superior user experience and the best performance. We offer high-quality native mobile development for iOS and Android for a reasonable price.",
    },
    {
      img: transportation,
      title: "NATIVE MOBILE APP DEVELOPMENT",
      subtitle:
        "Native development implies superior user experience and the best performance. We offer high-quality native mobile development for iOS and Android for a reasonable price.",
    },
    {
      img: transportation,
      title: "NATIVE MOBILE APP DEVELOPMENT",
      subtitle:
        "Native development implies superior user experience and the best performance. We offer high-quality native mobile development for iOS and Android for a reasonable price.",
    },
  ]

  const service =[
    {
      img: PLANNING,
      title: "PLANNING",
      subtitle:
        "Thorough analysis of application requirements helps to understand project objectives and plan its implementation.",
    },
    {
      img: PROTOTYPING,
      title: "PROTOTYPING",
      subtitle:
        "Development of early prototypes or a minimal viable product (MVP) helps to test the application concept and groom the backlog.",
    },
    {
      img: Design,
      title: "DESIGN",
      subtitle:
        "At this stage the concept is elaborated, the application architecture is designed, and the requirements are specified in detail.",
    },
    {
      img: DEVELOPMENT,
      title: "DEVELOPMENT",
      subtitle:
        "The application is developed in iterations so that the stakeholders' feedback is frequently collected and the team adapts to change.",
    },
    {
      img: TESTING,
      title: "QA & TESTING",
      subtitle:
        "Validation, system, functional and interoperability testing specialists are available to ensure smooth and fail-free operation.",
    },
    {
      img: SUPPORT,
      title: "SUPPORT",
      subtitle:
        "Up-to-the-minute assistance in fixing and solving all kinds of emerging issues.",
    },
  ]

  const PC = [
    {
      img: img01,
    },
    {
      img: img02,
    },
    {
      img: img02,
    },
    {
      img: img03,
    },
    {
      img: img04,
    },
    {
      img: img05,
    },
    {
      img: img06,
    },
  ];

  const strategy = [
    {
      img: strategys,
      title: "ELABORATED STRATEGY",
      },
    {
      img: approach,
      title: "USER-CENTERED APPROACH",
      },
    {
      img: technologies,
      title: "FULL RANGE OF TECHNOLOGIES",
      },
    {
      img: guarante,
      title: "QUALITY GUARANTEE",
      },
  ]

  const data = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    title: "Recent Projects We Made",
  };
  const faqs = [
    {
      title: "What Does Minimum Viable Product Mean?",
      text: "A Minimum Viable Product (MVP) is a software application that has enough basic features to put on the market, attract users - early adopters - and validate product ideas early in the product development cycle. MVP is an extremely popular concept in software development for startups."
    },
    {
      title: "How Do You Develop an MVP?",
      text: "When it comes to startup MVP app development, we usually advise following Lean methodology (Find, Execute, and Validate framework). Alternative steps for software development for startups are:"
    },
    {
      title: "How long should an MVP take to build?",
      text: "MVP software development for startups may take from 1-2 weeks to 2-3 months depending on the type of the MVP (e.g if it is just a landing page), the scope, complexity, and innovation of the business idea."
    },
    {
      title: "How much does an MVP development cost?",
      text: "The average cost of an mvp software development for startups may be between $10K and $50K; as we mentioned above, pricing, as well as the time, depends entirely on the MVP concept complexity and other important factors such as platform (web, mobile, IoT), technologies used, innovations required."
    },
    {
      title: "What comes after an MVP?",
      text: "When you tested and proved your business idea with the MVP, the next step is fully-functional product development. Based on the feedback from the users, you and the app development team will be able to define what features your application should have and their priorities."
    },
  ]
  return (
    <>
      <div className={styles.container}>
        <div className="globalContainer">

      <BreadCrumb menu={menu} />
        </div>
        <div className={`${styles.txt} globalContainer`}>
          <div>
            <Title title={"Custom Mobile App Development"} color={"white"} />
            <p className={styles.p}>
              Our experienced in-house teams are dedicated to developing mobile
              apps which foster your business. All our work is the result of
              continuous research, unceasing creativity, and scrupulous
              execution.
            </p>
          </div>
        </div>
      </div>

      {/* "Body" */}
      <div className={styles.body}>
        <Title title={"Our Custom Mobile App Development Services"} />
        <p className={`${styles.p} globalContainer`}>
          Thanks to deep involvement in your business goals and challenges we
          can find the most optimal solution to your business from the time,
          cost, and quality perspective.
        </p>
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
        <div className={styles.whitebg}>
          <div>
            <Title title={"Our Happy Clients"} />
          </div>
          <div className={`${styles.swiper} globalContainer`}>
            <BigSwiper obj={obj} />
          </div>
          <Title title={"Custom Mobile App Development For Industries"} />
          <p className={`${styles.p} globalContainer`}>
            We build only industry-relevant solutions that increase business
            effectiveness and efficiency
          </p>
          <div className={`${styles.mobile} globalContainer`}>
          {mobile.map((item) => (
            <div className={styles.Cards}>
              <SoftwareCard
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          ))}
        </div>
        
        <DiscussProject/>
        <div className={styles.whitebground}>
          <Title title={"Our Mobile App Development Services"}/>
          <p className={`${styles.p} globalContainer`}>
            We build only industry-relevant solutions that increase business
            effectiveness and efficiency
          </p>
          <div className={`${styles.service} globalContainer`}>
          {service.map((item) => (
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
        <div>
            <Title title={"Why Moomkin"} />
          </div>
          <div className={`${styles.customWraper} globalContainer`}>
            <div className={styles.title}>
              <div>
                <img src={galka} alt="" />
                <span>10 years of successfully providing custom mobile app development services</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>150+ developed projects for 10+ industries</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>Well-established processes across all departments</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>We deliver aesthetic design with a team of professional designers</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>Bug-free software at a reasonable cost</span>
              </div>
            </div>
            <TinySwiper data={PC} />
        </div>
        <div className={`${styles.strategy} globalContainer`}>
          {strategy.map((item) => (
            <div className={styles.Cards}>
              <SoftwareCard
                img={item.img}
                title={item.title}
                clas={false}

              />
            </div>
          ))}
        </div>
        <SmallSwiper obj={data} />
        </div>
        </div>
        <div className={`${styles.faqs} globalContainer`}>
          <Title title={"Frequently Asked Questions"} />
          {/* <p className={styles.p}>Answers to commonly asked questions</p> */}
          <Acardion data={faqs}/>
        </div>
        <div className={styles.blueAsk}>
          <ProjectAnalysis />
      </div>
      </div>
    </>
  );
};

export default MobileApps;

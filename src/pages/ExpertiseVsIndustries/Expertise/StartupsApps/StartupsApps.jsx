import React, { useState } from "react";
import FlexCard from "../../../../components/Cards/FlexCard/FlexCard";
import Title from "../../../../components/Title/Title";
import styles from "./StartupsApps.module.scss";

import one from "./../../../../assets/images/01.svg";
import two from "./../../../../assets/images/02.svg";
import three from "./../../../../assets/images/03.svg";
import mvp from "./../../../../assets/images/MVP.svg";
import Partner from "./../../../../assets/images/Partner.svg";
import Special from "./../../../../assets/images/Special.svg";
import Haverman from "./../../../../assets/images/Haverman.png";
import Karbushev from "./../../../../assets/images/Karbushev.jpg";
import img1 from "../../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../../assets/images/napa.png";
import img3 from "../../../../assets/images/kingbok.jpg";
import img4 from "../../../../assets/images/edcontrol.png";
import img5 from "../../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../../assets/images/it-park.jpg";
import img01 from "../../../../assets/images/img1.jpg";
import img02 from "../../../../assets/images/img2.jpg";
import img03 from "../../../../assets/images/img3.jpg";
import img04 from "../../../../assets/images/img4.jpg";
import img05 from "../../../../assets/images/img5.jpg";
import img06 from "../../../../assets/images/img6.jpg";
import sertificat1 from "../../../../assets/icons/sertificat-1.svg";
import sertificat2 from "../../../../assets/icons/sertificat-2.svg";
import sertificat3 from "../../../../assets/icons/sertificat-3.svg";
import sertificat4 from "../../../../assets/icons/sertificat-4.svg";
import sertificat5 from "../../../../assets/icons/sertificat-5.svg";
import sertificat6 from "../../../../assets/icons/sertificat-6.svg";
import galka from "../../../../assets/icons/Glalka.svg";

import AnimationText from "../../../../components/AnimationText/AnimationText";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";
import SmallSwiper from "../../../../components/Swipers/SmallSwiper/SmallSwiper";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";
import TinySwiper from "../../../../components/Swipers/TinySwiper/TinySwiper";
import Acardion from "../../../../components/Acardion/Acardion";
import ProjectAnalysis from "../../../../components/ProjectAnalysis/ProjectAnalysis";

const StartupsApps = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const flexCard = [
    {
      img: mvp,
      title: "MVP DEVELOPMENT",
      text: "SumatoSoft provides project-specific business and technical software development consultations for startups.",
      children: (
        <div>
          <ul>
            <li>Ideas evaluation</li>
            <li>Proof of concept</li>
            <li>Tech stack consultation</li>
            <li>Project estimations</li>
          </ul>
        </div>
      ),
    },
    {
      img: Partner,
      title: "RELIABLE TECHNICAL PARTNER",
      text: "SumatoSoft creates a new approach to software development for startups and assists startup companies in technical planning and project implementation.",
      children: (
        <div>
          <ul>
            <li>High-quality source code</li>
            <li>Dedicated team scalability and flexibility</li>
            <li>Transparent cooperation</li>
            <li>Fast development cycle</li>
            <li>Immediate work results</li>
          </ul>
        </div>
      ),
    },
    {
      img: Special,
      title: "SPECIAL REFERRAL PROGRAM",
      text: "Following this program, each startup that works with us on their MVP development and which will recommend another startup to work with SumatoSoft will get a good discount on our app development services in the first 3 months of the cooperation of the referred team.",
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

  const data = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    title: "Recent Projects We Made",
  };

  const lexCard = [
    {
      img: one,
      title: "PRODUCT PLANNING & ASSESSMENT",
      children: (
        <div>
          <ul>
            <li>Discovery phase & business analysis</li>
            <li>Requirements engineering Architecture design</li>
            <li>Software maintenance</li>
            <li>Development time & cost estimation</li>
          </ul>
        </div>
      ),
    },
    {
      img: two,
      title: "SOFTWARE DEVELOPMENT",
      children: (
        <div>
          <ul>
            <li>User experience design</li>
            <li>User interface design</li>
            <li>Backend & frontend development</li>
            <li>Testing & stabilization</li>
            <li>Infrastructure management</li>
          </ul>
        </div>
      ),
    },
    {
      img: three,
      title: "MVP DELIVERY & MAINTENANCE",
      children: (
        <div>
          <ul>
            <li>Product updates</li>
            <li>New feature development</li>
            <li>Software maintenance</li>
          </ul>
        </div>
      ),
    },
  ];

  const reward = [
    {
      img: sertificat1,
      title: "Recognized by Clutch.co",
    },
    {
      img: sertificat2,
      title: "AMAZON Consulting Partner",
    },
    {
      img: sertificat3,
      title: "Recognized by GoodFirms.co",
    },
    {
      img: sertificat4,
      title: "Recognized by TopDigital.Agency",
    },
    {
      img: sertificat5,
      title: "Recognized by TechReviewer.co",
    },
    {
      img: sertificat6,
      title: "Hign Tech Park Resident",
    },
  ];

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
      <div className={styles.container}></div>
      <div className={styles.body}>
        <div>
          <AnimationText
            title={"Untimely software update delivery"}
            subtitle={"decreases customer and client satisfaction."}
          />
        </div>
        <div className={styles.iner}>
          <div className={styles.anime}>
            <Title
              title={"Tech Partner For Startups And Startup Accelerators"}
            />
          </div>
          <div>
            <p className={styles.soft}>
              Try New Way of Software Development for Startups. <br /> Fast.
              Flexible. Reliable.
            </p>
          </div>
          <div className={styles.filter}>
            {isActive ? (
              <div
                className={styles.infilters}
                id="1"
                onClick={handleClick}
                style={{
                  borderBottom: isActive ? "solid" : "dashed",
                  borderBlockColor: isActive ? "red" : "red",
                }}
              >
                FOR STARTUPS
              </div>
            ) : (
              <div
                className={styles.infilters}
                id="2"
                onClick={handleClick}
                style={{
                  borderBottom: isActive ? "solid" : "dashed",
                  borderBlockColor: isActive ? "red" : "red",
                }}
              >
                FOR ACCELERATORS
              </div>
            )}
          </div>
          <div className={`${styles.FlexCard} globalContainer`}>
            {flexCard.map((item) => (
              <div className={styles.asdas}>
                <FlexCard
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  children={item.children}
                />
              </div>
            ))}
          </div>
          <div className={`${styles.soft} globalContainer`}>
            <div>
              <Title
                title={"Software Development For Startups Process Explained"}
              />
            </div>
            <p className={styles.soft}>
              We not only develop Minimum Viable Products for startups, but we
              also make them Minimum Valuable Solutions.
            </p>
            <div>
              <div className={`${styles.FlexCard} globalContainer`}>
                {lexCard.map((item) => (
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
          </div>
          <div>
            <Title title={"Our Happy Clients"} />
          </div>
          <div className={`${styles.swiper} globalContainer`}>
            <BigSwiper obj={obj} />
          </div>
        </div>
        <SmallSwiper obj={data} />
        <div className={styles.whitebg}>
          <Title title={"Rewards & Recognitions"} />
          <p className={styles.p}>
            SumatoSoft has been recognized by the leading analytics agencies
            working with the best software development companies <br /> from all
            over the world. Our values and partners help us to provide the best
            software development services for startups in <br /> the field.
          </p>
          <div className={`${styles.reward} globalContainer`}>
            {reward.map((item) => (
              <div>
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
            <Title title={"Why Entrust App Development To Us"} />
          </div>
          <p className={`${styles.p} globalContainer`}>
            Because after 10 years on the market we know software development
            for startups inside out. We are eager to provide everything needed
            to develop your MVP application, from building a Lean Canvas to the
            release of a fully functioning MVP. We help entrepreneurs to test
            and validate their business model by using Customer Development
            techniques and an Agile Development approach.
          </p>
          <div className={`${styles.customWraper} globalContainer`}>
            <div className={styles.title}>
              <div>
                <img src={galka} alt="" />
                <span>Individual approach</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>Result-oriented</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>Experience and tech expertise</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>Partnership approach</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>Lean approach</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>User Interface Prototypes</span>
              </div>
              <div>
                <img src={galka} alt="" />
                <span>Project estimation and timeline</span>
              </div>
            </div>
            <TinySwiper data={PC} />
          </div>
        </div>
        <div className={`${styles.faqs} globalContainer`}>
          <Title title={"Frequently Asked Questions"} />
          <p className={styles.p}>Answers to commonly asked questions</p>
          <Acardion data={faqs}/>
        </div>
        <div className={styles.blueAsk}>
          <ProjectAnalysis />
        </div>
      </div>
    </>
  );
};

export default StartupsApps;

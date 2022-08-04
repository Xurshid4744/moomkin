import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import SoftwareCard from "../../components/Cards/SoftwareCard/SoftwareCard";
import HeadLine from "../../components/HeadLine/HeadLine";
import Title from "../../components/Title/Title";
import styles from "./ExpertiseVsIndustries.module.scss";
import SmallSwiper from "../../components/Swipers/SmallSwiper/SmallSwiper";
import DiscussProject from "../../components/DiscussProject/DiscussProject";
import Acardion from "../../components/Acardion/Acardion";

import enterprise from "./../../assets/icons/Enterprise.svg";
import startups from "./../../assets/images/StartupsApps.svg";
import internet from "./../../assets/images/InternetOfThings.svg";
// import internet from "./../../assets/images/InternetOfThings.svg"
import saas from "./../../assets/images/SaasDevelopment.svg";
import mobile from "./../../assets/images/MobilaApps.svg";
import AI from "./../../assets/images/AI.svg";
import blockchain from "./../../assets/images/blockchain.svg";
import DataScience from "./../../assets/images/DataScience.svg";
import MachineLearning from "./../../assets/images/MachineLearning.svg";
import elearning from "./../../assets/images/elearning.svg";
import transport from "./../../assets/images/transport.svg";
import targeting from "./../../assets/images/targeting.svg";
import ecommerce from "./../../assets/images/ecommerce.svg";
import realestate from "./../../assets/images/realestate.svg";
import media from "./../../assets/images/media.svg";
import travel from "./../../assets/images/travel.svg";
import healthcare from "./../../assets/images/healthcare.svg";
import financial from "./../../assets/images/financial.svg";
import img1 from "./../../assets/images/mehrigiyo.jpg";
import img2 from "./../../assets/images/napa.png";
import img3 from "./../../assets/images/kingbok.jpg";
import img4 from "./../../assets/images/edcontrol.png";
import img5 from "./../../assets/images/adliya_vazirligi.png";
import img6 from "./../../assets/images/it-park.jpg";
import performance from "./../../assets/images/performance.svg";
import peoplefocused from "./../../assets/images/peoplefocused.svg";
import maintainable from "./../../assets/images/maintainable.svg";
import scalable from "./../../assets/images/scalable.svg";
import Haverman from "./../../assets/images/Haverman.png";
import Karbushev from "./../../assets/images/Karbushev.jpg";
import BigSwiper from "../../components/Swipers/BigSwiper/BigSwiper";
import ProjectAnalysis from "../../components/ProjectAnalysis/ProjectAnalysis";

const ExpertiseVsIndustries = () => {
  const headLine = {
    title: "Application Development Made Simple & Transparent",
  };

  const menu = [
    {
      link: "",
      label: "Expertise & Industries",
    },
  ];

  const cards = [
    {
      img: enterprise,
      title: "ENTERPRISE APPLICATIONS",
      subtitle:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment systems etc.",
    },
    {
      img: startups,
      title: "MVPS FOR STARTUPS",
      subtitle:
        "Helping startups and small business to make prototypes and Minimum Viable Products ready to enter the market.",
    },
    {
      img: internet,
      title: "INTERNET OF THINGS",
      subtitle:
        "Building IoT applications for big data gathering, analyzing, and sharing. We make predictive decision-making possible.",
    },
    {
      img: saas,
      title: "SAAS PRODUCT DEVELOPMENT",
      subtitle:
        "Designing custom SaaS products for companies, enabling them to shift activities to cloud, integrate, and reduce costs.",
    },
    {
      img: mobile,
      title: "MOBILE APPLICATIONS",
      subtitle:
        "Creating multifunctional and user-friendly iOS and Android applications to get the utmost from mobile world.",
    },
  ];

  const latest = [
    {
      img: AI,
      title: "ARTIFICIAL INTELLIGENCE",
      subtitle:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment systems etc.",
    },
    {
      img: blockchain,
      title: "BLOCKCHAIN",
      subtitle:
        "Helping startups and small business to make prototypes and Minimum Viable Products ready to enter the market.",
    },
    {
      img: DataScience,
      title: "BIG DATA & DATA SCIENCE",
      subtitle:
        "Building IoT applications for big data gathering, analyzing, and sharing. We make predictive decision-making possible.",
    },
    {
      img: MachineLearning,
      title: "MACHINE LEARNING",
      subtitle:
        "Designing custom SaaS products for companies, enabling them to shift activities to cloud, integrate, and reduce costs.",
    },
  ];

  const industry = [
    {
      img: elearning,
      title: "ELEARNING",
      subtitle:
        "Start boosting your transportation and logistics business with a custom software solution designed especially for the market you’re working at.",
    },
    {
      img: transport,
      title: "TRANSPORT & AUTOMATION",
      subtitle:
        "Build effective relationships with clients thanks to marketing automation tools. Optimize your strategy and set new business goals.",
    },
    {
      img: targeting,
      title: "MARKETING AUTOMATION",
      subtitle:
        "Build stronger connections with customers by creating web and mobile ecommerce applications and bring shopping high-level experience.",
    },
    {
      img: ecommerce,
      title: "ECOMMERCE",
      subtitle:
        "Manage your clients, track your current offers and reliable data, and optimize offers and services for prospect and clients with real estate solutions.",
    },
    {
      img: realestate,
      title: "REAL ESTATE",
      subtitle:
        "Bring an innovative entertainment experience to the audience with the applications which support the advanced and trendy media technologies.",
    },
    {
      img: media,
      title: "MEDIA & ENTERTAINMENT",
      subtitle:
        "Present unforgettable user experience of planning, booking and making trips with your online service to current and potential users all over the world.",
    },
    {
      img: travel,
      title: "TRAVEL & HOSPITALITY",
      subtitle:
        "Develop healthcare & lifestyle services, tools and systems to provide patients and staff with the up-to-date technological tools to bring healthcare to a new level.",
    },
    {
      img: healthcare,
      title: "HEALTHCARE & LIFESTYLE",
      subtitle:
        "Facilitate financial operations with the tech-savvy solutions. We make web and mobile applications secure, scalable, and trustworthy.",
    },
    {
      img: financial,
      title: "FINANCIAL",
      subtitle:
        "Facilitate financial operations with the tech-savvy solutions. We make web and mobile applications secure, scalable, and trustworthy.",
    },
  ];

  const approach = [
    {
      img: performance,
      title: "High Performance",
      subtitle:
        "We create feature-rich software solutions with high performance and interactivity.",
    },
    {
      img: peoplefocused,
      title: "People-Focused",
      subtitle:
        "We develop people-oriented applications applying the most recent innovations in UX/UI.",
    },
    {
      img: maintainable,
      title: "Easily Maintainable",
      subtitle:
        "We make apps that won’t require complex and costly maintenance and support.",
    },
    {
      img: scalable,
      title: "Scalable",
      subtitle:
        "Coming up with a new wrinkle on business problems and ways to solve them.",
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

  const faqs = [
    {
      title: "How much does it cost to develop an app?",
      text: "Each application is unique and its cost depends on the many factors. You can read a short guide in our blog here or get in touch with our team and we will estimate your project for free.",
    },
    {
      title: "How long does it take to estimate app development?",
      text: "The estimation process can take from one day to a week or even two depending on the complexity of the application and amount of the initial information you can provide about your app idea.",
    },
    {
      title: "How will my idea be protected?",
      text: "Our company pays specific attention to our clients’ IP right protection. We use the following ways of app ideas protection: - NDA for the estimation process. - NDA as part of the app development agreement we sign - All IP rights on the app are automatically to our clients once the services are paid.",
    },
    {
      title: "What’s your approach to building communication with clients",
      text: "There are 3 main principles we follow while building communication with clients: - Full control and transparency of the application development process based on Agile principles. - Building a simplistic, but business-oriented approach in communication with clients. - Coming up with out-of-box solutions to the client’s business challenges and ways to solve them.",
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
      <div className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.headLine}>
            <HeadLine data={headLine} hidden={true} sizeTitle="45px">
              <p>
                Let’s build your next app with our team of skilled and creative
                people who have expertise in various domains and industries.
                After years of custom software development we can guarantee:
              </p>
              <ul>
                <li>Transparent cooperation</li>
                <li>Properly set processes of development</li>
                <li>Excellence of work</li>
              </ul>
            </HeadLine>
          </div>
        </div>
      </div>

      {/* body */}
      <div className={styles.body}>
        <Title title={"Our Expertise"} />
        <p className={`${styles.p} globalContainer`}>
          We create high-performance, interactive, user-friendly applications
          helping companies outsource app development to a whole new level.
          SumatoSoft focuses on the delivery of the apps designed to enhance the
          clients' business.
        </p>
        <div className={`${styles.InfoCards} globalContainer`}>
          {cards.map((item) => (
            <div className={styles.Cards}>
              <SoftwareCard
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          ))}
        </div>
        <section className={styles.latest}>
          <Title title={"Latest Tech We Apply"} />
          <div className={`${styles.latest_cards} globalContainer`}>
            {latest.map((item) => (
              <div className={styles.Cards}>
                <SoftwareCard
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </div>
            ))}
          </div>
        </section>
        <div className={styles.industry}>
          <Title title={"Industry-Focused App Development Approach"} />
          <p className={`${styles.p} globalContainer`}>
            Each application should be planned, designed and developed for
            definite goals. Our app developers make solutions tailored to
            specific industries considering not only the technical side, but
            also peculiarities of each business domain.
          </p>
        </div>
        <div className={`${styles.InfoCards} globalContainer`}>
          {industry.map((item) => (
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
        <section className={styles.latest}>
          <div className={`${styles.made}`}>
            <SmallSwiper obj={data} />
          </div>
          <DiscussProject />
          <div className={`${styles.faqs} globalContainer`}>
            <Title
              title={"Frequently Asked Questions About Application Development"}
            />
            <p className={styles.p}>Answers to commonly asked questions</p>
            <Acardion data={faqs} />
          </div>
        </section>
        <section className={styles.bluesec}>
          <Title title={"Our Approach"} color={"white"} />
          <div className={`${styles.bluesec_cards} globalContainer`}>
            {approach.map((item) => (
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
        <div className={styles.happyClient}>
          <Title title={"Our Happy Clients"} />
          <div className={`${styles.swiper} globalContainer`}>
            <BigSwiper obj={obj} />
          </div>
        </div>
        <div className={styles.blueAsk}>
          <ProjectAnalysis />
        </div>
      </div>
    </>
  );
};

export default ExpertiseVsIndustries;

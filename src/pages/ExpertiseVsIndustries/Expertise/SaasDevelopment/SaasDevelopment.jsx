import React from "react";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import HeadLine from "../../../../components/HeadLine/HeadLine";
import Title from "../../../../components/Title/Title";
import styles from "./SaasDevelopment.module.scss";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";
import FlexCard from "../../../../components/Cards/FlexCard/FlexCard";
import DiscussProject from "../../../../components/DiscussProject/DiscussProject";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";

import media from "./../../../../assets/images/media.svg";
import enterprise from "./../../../../assets/images/enterprise.svg";
import logistics from "./../../../../assets/images/logistics.svg";
import foodtech from "./../../../../assets/images/foodtech.svg";
import iotmanagement from "./../../../../assets/images/iotmanagemant.svg";
import education from "./../../../../assets/images/education.svg";
import banking from "./../../../../assets/images/banking.svg";
import realestate from "./../../../../assets/images/realestate.svg";
import ecommerce from "./../../../../assets/images/ecommerce.svg";
import marketing from "./../../../../assets/images/marketing.svg";
import more from "./../../../../assets/images/more.svg";
import development from "./../../../../assets/images/consulting.svg";
import design from "./../../../../assets/images/design.svg";
import application from "./../../../../assets/images/application.svg";
import support from "./../../../../assets/images/support&maintance.svg";
import proven from "./../../../../assets/images/proven.svg";
import agile from "./../../../../assets/images/agile.svg";
import clear from "./../../../../assets/images/clear.svg";
import lessons from "./../../../../assets/images/lessons.svg";
import transparency from "./../../../../assets/images/transparency.svg";
import sprint from "./../../../../assets/images/sprint.svg";
import openess from "./../../../../assets/images/openess.svg";
import dedicated from "./../../../../assets/images/dedicated.svg";
import regular from "./../../../../assets/images/regular.svg";
import sertificat1 from "../../../../assets/icons/sertificat-1.svg";
import sertificat2 from "../../../../assets/icons/sertificat-2.svg";
import sertificat3 from "../../../../assets/icons/sertificat-3.svg";
import sertificat4 from "../../../../assets/icons/sertificat-4.svg";
import sertificat5 from "../../../../assets/icons/sertificat-5.svg";
import Haverman from "./../../../../assets/images/Haverman.png";
import Karbushev from "./../../../../assets/images/Karbushev.jpg";
// import analytics from "./../../../../assets/images/analytics.svg";

import img17 from "./../../../../assets/icons/Research.svg";
import img19 from "./../../../../assets/icons/Analysis2.svg";
import img18 from "./../../../../assets/icons/Research1.svg";
import img20 from "./../../../../assets/icons/Analysis1.svg";
import img21 from "./../../../../assets/icons/Design.svg";
import img22 from "./../../../../assets/icons/Design1.svg";
import img23 from "./../../../../assets/icons/Implementation.svg";
import img24 from "./../../../../assets/icons/Implementation1.svg";
import img25 from "./../../../../assets/icons/Post-release.svg";
import img26 from "./../../../../assets/icons/Post-release1.svg";
import img1 from "../../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../../assets/images/napa.png";
import img3 from "../../../../assets/images/kingbok.jpg";
import img4 from "../../../../assets/images/edcontrol.png";
import img5 from "../../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../../assets/images/it-park.jpg";
import ember from "../../../../assets/images/ember.svg";
import html from "../../../../assets/images/html.svg";
import mysql from "../../../../assets/images/mysql.svg";
import android from "../../../../assets/images/android.svg";
import ios from "../../../../assets/images/ios.svg";
import angular from "../../../../assets/images/angular.svg";
import mongodb from "../../../../assets/images/mongodb.svg";
import rubyrails from "../../../../assets/images/rubyrails.svg";
import react from "../../../../assets/images/react.svg";
import ruby from "../../../../assets/images/ruby.svg";
import bootstrap from "../../../../assets/images/bootstrap.svg";
import postgre from "../../../../assets/images/postgre.svg";
import AnimationCard from "../../../../components/Cards/AnimationCard/AnimationCard";
import SmallSwiper from "../../../../components/Swipers/SmallSwiper/SmallSwiper";
import ProjectAnalysis from "../../../../components/ProjectAnalysis/ProjectAnalysis";
import Acardion from "../../../../components/Acardion/Acardion";

const SaasDevelopment = () => {
  const menu = [
    {
      link: "",
      label: "Expertise & Industries",
    },
    {
      link: "",
      label: "SaaS Application Development Services",
    },
  ];

  const headLine = {
    title: "SaaS Application Development Services",
  };

  const cards = [
    {
      img: media,
      title: "MEDIA & ENTERTAINMENT",
    },
    {
      img: enterprise,
      title: "ENTERPRISE",
    },
    {
      img: logistics,
      title: "LOGISTICS",
    },
    {
      img: foodtech,
      title: "FOOD TECH",
    },
    {
      img: iotmanagement,
      title: "IOT MANAGEMENT",
    },
    {
      img: education,
      title: "EDUCATION",
    },
    {
      img: banking,
      title: "BANKING & FINANCE",
    },
    {
      img: realestate,
      title: "REAL ESTATE",
    },
    {
      img: ecommerce,
      title: "ECOMMERCE",
    },
    {
      img: marketing,
      title: "MARKETING",
    },
    {
      img: more,
      title: "AND MORE",
    },
  ];

  const lexCard = [
    {
      img: development,
      title: "SAAS DEVELOPMENT CONSULTING",
      children: (
        <div>
          <p>
            Implementing a SaaS solution is the first step towards business
            digitalization. We’ve worked with the best IT innovations for 10
            years. We can help to apply them in your business and tell the pros
            and cons of their implementation. We also perform the Discovery
            Phase, develop the SaaS application concept, and devise a
            development strategy that reflects your long-term goals.
          </p>
          <ul>
            <li>Technical consultation</li>
            <li>Conceptualization</li>
            <li>Strategy Development</li>
          </ul>
        </div>
      ),
    },
    {
      img: design,
      title: "SAAS APP DESIGN & PROTOTYPING",
      children: (
        <div>
          <p>
            SAAS APP DESIGN & PROTOTYPING We design SaaS app prototypes to test
            and improve the concept through beta testing on users or demonstrate
            your idea to the investors. Our UX designers focus on the behavior
            of the application users and ensure it is user-friendly and
            appealing.
          </p>
          <ul>
            <li>UI Design and Development</li>
            <li>Rapid Prototyping</li>
          </ul>
        </div>
      ),
    },
    {
      img: application,
      title: "SAAS APPLICATION DEVELOPMENT",
      children: (
        <div>
          <p>
            We can develop a SaaS product from scratch or re-architecture
            existing applications for SaaS environments. By ensuring predictable
            delivery and trustworthy communication, we build complex work-ready
            products that fit your business.
          </p>
          <ul>
            <li>Product updates</li>
            <li>New feature development</li>
            <li>Software maintenance</li>
          </ul>
        </div>
      ),
    },
    {
      img: support,
      title: "SUPPORT & MAINTENANCE",
      children: (
        <div>
          <p>
            When SaaS application development finishes, we ensure team
            continuity so that the same development team works on the new
            features and maintains the product. You will be able to scale and
            descale the SaaS development team according to your business plans
            and needs.
          </p>
          <ul>
            <li>Flexible team</li>
            <li>Ongoing support & maintenance</li>
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
  ];

  const flexpg = [
    {
      img: proven,
      text: "Proven workflows; Dedicated QA specialists",
    },
    {
      img: agile,
      text: "Agile methodology",
    },
    {
      img: clear,
      text: "Clear and detailed estimates",
    },
    {
      img: lessons,
      text: "Lessons learnt after 36000 hours of custom software development",
    },
    {
      img: transparency,
      text: "100% transparency",
    },
    {
      img: sprint,
      text: "Sprint / monthly reports, custom reports",
    },
    {
      img: openess,
      text: "Openness to share knowledge and experience with your teams",
    },
    {
      img: dedicated,
      text: "Dedicated Technical PO / PM / BA",
    },
    {
      img: regular,
      text: "Regular communications: calls, emails, chats, personal meetings",
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
  const animationCardLeft = [
    {
      img1: img17,
      img2: img18,
      title: "1. Discovery phase",
      ul: [
        { li: "Interview stakeholders" },
        { li: "Analyze key apps competitors" },
        { li: "Research users and marketing" },
      ],
    },
    {
      img1: img21,
      img2: img22,
      title: "3.Design",
      text: "",
      ul: [
        { li: "Develop Information Architecture (IA)" },
        { li: "Make application wireframes" },
        { li: "Create clickable prototypes" },
        { li: "Prepare visual design" },
        { li: "Animate the interface" },
      ],
    },
    {
      img1: img25,
      img2: img26,
      title: "5.Post-release",
      text: "",
      ul: [{ li: "Analyze users experience" }, { li: "Design optimization" }],
    },
  ];

  const animationCardRight = [
    {
      img1: img20,
      img2: img19,
      title: "2. Analysis",
      text: "",
      ul: [
        { li: "Develop personas" },
        { li: "Define application functionality" },
        { li: "Make customer journey map" },
        { li: "Create app user flowcharts" },
        { li: "Define web and mobile functionality" },
      ],
    },
    {
      img1: img23,
      img2: img24,
      title: "4.Implementation",
      text: "",
      ul: [{ li: "Supervise the design" }, { li: "Create design systems" }],
    },
  ];

  const faqs = [
    {
      title: "What is SaaS?",
      text: "The SaaS (Software as a Service) model allows users to access, use and pay for the software online, without desktop installation, further maintenance, or integration issues. SaaS provides customers with ready-made software through a web browser or mobile application. SaaS application development services are the process of planning, development and delivery of a SaaS solution by professional software developers.",
    },
    {
      title: "How long does it take to build a SaaS product?",
      text: "SaaS product development usually takes from 2-3 to 10-12 months or longer. Mainly, it depends on the scale and scope of the product planned. SumatoSoft has provided SaaS application development services since 2012, so we can say that MVP may be planned, designed and developed within a 2-4 months time frame.",
    },
    {
      title: "How much does it cost to build a SaaS platform?",
      text: "SaaS software development cost usually starts at $30-40K for an MVP. More or less fully functional Software as a Service app costs at $100-250K depending on the scope of the service, the functionality, SaaS developer choice, and also the total cost of ownership. SaaS platforms have more enhanced functions and additional functions in terms of planning, execution and development in comparison with, for example, some simple business automation or ecommerce software.",
    },
    {
      title: "Is SaaS secure?",
      text: "SaaS developers are responsible for the security of code, network, and physical infrastructure security. However, developers are only partially responsible for protecting customer data or users' access to it as they usually use world-known 3rd party cloud applications for data storage and processing (e.g. Amazon). Such services pay special attention to data security. Moreover, SaaS application development services providers must address this issue too on their side.",
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
                We help you build reliable, efficient solutions or upgrade your
                on-premise product without making any sacrifices in your
                time-to-market.
              </p>
              <ul>
                <li>SaaS Product Conceptualisation</li>
                <li>Strategy Development</li>
                <li>UI Design and Development</li>
                <li>Rapid Prototyping</li>
                <li>SaaS Development</li>
                <li>Quality Assurance and Testing</li>
                <li>On-going Support and Development</li>
              </ul>
            </HeadLine>
          </div>
        </div>
      </div>

      {/* body */}
      <div className={styles.body}>
        <Title title={"SaaS Application Development for Your Industry"} />
        <p className={`${styles.p} globalContainer`}>
          Having a strong product development experience, SumatoSoft provides a
          wide range of SaaS development services for our global clients from
          various industries.
        </p>
        <div className={`${styles.InfoCards} globalContainer`}>
          {cards.map((item) => (
            <div className={styles.Cards}>
              <SoftwareCard img={item.img} title={item.title} clas={false} />
            </div>
          ))}
        </div>
        <Title title={"Our SaaS App Development Services"} />
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
        <DiscussProject />
        <div className={styles.rewardWrapper}>
          <Title title={"Rewards & Recognitions"} />
          <p className={`${styles.p} globalContainer`}>
            SumatoSoft has been recognized by the leading analytics agencies,
            working with the best software development companies from all over
            the world. Our properly set and transparent processes allow
            providing valuable business software.
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
        </div>
        <div>
          <Title
            title={
              "Benefits of Choosing SumatoSoft as the SaaS Development Company"
            }
          />
          <div className={`${styles.triple} globalContainer`}>
            <h4>BUILD ON</h4>
            <h4>GO FASTER WITH</h4>
            <h4>STAY IN CONTROL</h4>
          </div>
          <div className={`${styles.Flexpg} globalContainer`}>
            {flexpg.map((item) => (
              <div className={styles.dsas}>
                <FlexCard img={item.img} text={item.text} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.happyClient}>
          <Title title={"Our Happy Clients"} />
          <div className={`${styles.swiper} globalContainer`}>
            <BigSwiper obj={obj} />
          </div>
        </div>
        <div className={`${styles.titl}`}>
          <Title title={"Our SaaS Products Development Process"} />
        </div>
        <div className={`${styles.animeCrd} globalContainer`}>
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
                  title={item.title}
                  text={item.text}
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
        </div>
        <div className={`${styles.made}`}>
          <SmallSwiper obj={data} />
        </div>
        <div className={styles.tools}>
          <Title title={"Technologies We Work With"} color={"white"} />
          <div className={`${styles.toolsimg} globalContainer`}>
            <img src={ember} alt="" />
            <img src={html} alt="" />
            <img src={mysql} alt="" />
            <img src={android} alt="" />
            <img src={ios} alt="" />
            <img src={angular} alt="" />
            <img src={mongodb} alt="" />
            <img src={rubyrails} alt="" />
            <img src={react} alt="" />
            <img src={ruby} alt="" />
            <img src={bootstrap} alt="" />
            <img src={postgre} alt="" />
          </div>
        </div>
        <div className={`${styles.faqs} globalContainer`}>
          <Title title={"Frequently Asked Questions"} />
          <p className={styles.p}>Answers to commonly asked questions</p>
          <Acardion data={faqs} />
        </div>
        <div className={styles.blueAsk}>
          <ProjectAnalysis />
        </div>
      </div>
    </>
  );
};

export default SaasDevelopment;

import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import SoftwareCard from "../../components/Cards/SoftwareCard/SoftwareCard";
import HeadLine from "../../components/HeadLine/HeadLine";
import Title from "../../components/Title/Title";
import styles from "./Services.module.scss";

import price from "../../assets/icons/price.svg";
import time from "../../assets/icons/time.svg";
import english from "../../assets/icons/english.svg";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

import img4 from "../../assets/icons/elearning.svg";
import img5 from "../../assets/icons/TRANSPORT-LOGISTICS.svg";
import img6 from "../../assets/icons/BLOCKCHAIN.svg";
import img7 from "../../assets/icons/MARKETING-AUTOMATION.svg";
import img8 from "../../assets/icons/ECOMMERCE-RETAIL.svg";
import img9 from "../../assets/icons/REAL-ESTATE.svg";
import img10 from "../../assets/icons/MEDIA-ENTERTAINMENT.svg";
import img11 from "../../assets/icons/TRAVEL-HOSPITALITY.svg";
import img12 from "../../assets/icons/HEALTHCARE-LIFESTYLE.svg";
import img13 from "../../assets/icons/FINTECH-APPLICATIONS.svg";
import img14 from "../../assets/icons/AUTOMOTIVE.svg";

import img15 from "../../assets/images/mehrigiyo.jpg";
import img16 from "../../assets/images/kingbok.jpg";
import img17 from "../../assets/images/it-park.jpg";
import img18 from "../../assets/images/napa.png";
import img19 from "../../assets/images/edcontrol.png";
import img20 from "../../assets/images/adliya_vazirligi.png";

import img21 from "../../assets/icons/DevelopmentServices1.svg";
import img22 from "../../assets/icons/DevelopmentServices2.svg";
import img23 from "../../assets/icons/DevelopmentServices3.svg";
import img24 from "../../assets/icons/DevelopmentServices4.svg";
import img25 from "../../assets/icons/DevelopmentServices5.svg";

import img26 from "../../assets/icons/3RD-PARTY.svg";
import img27 from "../../assets/icons/HIGHEST-SECURITY.svg";
import img28 from "../../assets/icons/CLOUD-BASED.svg";
import img29 from "../../assets/icons/MICROSERVICES-BASED.svg";
import img30 from "../../assets/icons/UNIVERSAL-ACCESSIBILITY.svg";

import img31 from "../../assets/icons/sertificat-1.svg";
import img32 from "../../assets/icons/sertificat-2.svg";
import img33 from "../../assets/icons/sertificat-3.svg";
import img34 from "../../assets/icons/sertificat-4.svg";
import img35 from "../../assets/icons/sertificat-5.svg";
import img36 from "../../assets/icons/sertificat-6.svg";

import img37 from "../../assets/icons/Research3.svg";
import img38 from "../../assets/icons/Quality-Assurance.svg";
import img39 from "../../assets/icons/Deployment.svg";
import img40 from "../../assets/icons/Design.svg";

import DiscussProject from "../../components/DiscussProject/DiscussProject";
import BigSwiper from "../../components/Swipers/BigSwiper/BigSwiper";
import SmallSwiper from "../../components/Swipers/SmallSwiper/SmallSwiper";
import FlexCard from "../../components/Cards/FlexCard/FlexCard";
import AnimationCard from "../../components/Cards/AnimationCard/AnimationCard";
import ProjectAnalysis from "../../components/ProjectAnalysis/ProjectAnalysis";
import Acardion from "../../components/Acardion/Acardion";

const Services = () => {
  const menu = [{ link: "", label: "Services" }];
  const headLine = { title: "Custom Web Development Company" };
  const benefitsCard = [
    { img: price, title: "2X LESS TIME SPENT ON DEVELOPMENT-READY DESIGN" },
    { img: time, title: "25% CUT TIME ON UI DESIGN" },
    { img: english, title: "30% CUT TIME ON NEW DESIGN DELIVERY" },
  ];
  const industryCard = [
    {
      img: img4,
      title: "ELEARNING",
      subtitle:
        "Bring innovation to the whole educational process with EdTech custom solutions allowing teachers to make it flexible, engaging, and highly efficient. We make user-friendly and easy-to-use e-learning portals with wide sets of functions and possibilities for extension.",
    },
    {
      img: img5,
      title: "TRANSPORT & LOGISTICS",
      subtitle:
        "Start boosting your transportation and logistics business with custom web application development for freight reservation management, transportation management, and supply chain.",
    },
    {
      img: img6,
      title: "BLOCKCHAIN",
      subtitle:
        "Empower your business with decentralized blockchain networks that can secure financial operations and your inner data. Imply the state-of-art technology with our custom web application development services",
    },
    {
      img: img7,
      title: "MARKETING AUTOMATION",
      subtitle:
        "Build effective relationships with clients thanks to marketing automation tools. Optimize your strategy, gather insights, and set new business goals with custom top-notch analytical software.",
    },
    {
      img: img8,
      title: "ECOMMERCE & RETAIL",
      subtitle:
        "Build stronger connections with customers by creating web and mobile e-commerce applications and bringing shopping high-level experience. Our progressive e-commerce applications ensure your business is on 24/7/365 days a year.",
    },
    {
      img: img9,
      title: "REAL ESTATE",
      subtitle:
        "Manage your clients, track the status of your current deals, and optimize your offers with custom real estate solutions.",
    },
    {
      img: img10,
      title: "MEDIA & ENTERTAINMENT",
      subtitle:
        "Bring an innovative entertainment experience to the audience with the applications which support the advanced and trendy technologies. We develop feature-rich and easily scalable digital content distribution web solutions.",
    },
    {
      img: img11,
      title: "TRAVEL & HOSPITALITY",
      subtitle:
        "Present unforgettable user experience of planning, booking, and making trips with your online service to current and potential users all over the world.",
    },
    {
      img: img12,
      title: "HEALTHCARE & LIFESTYLE",
      subtitle:
        "Develop healthcare & lifestyle services, tools, and systems to provide patients and staff with the up-to-date technological tools to bring healthcare to a new level.",
    },
    {
      img: img13,
      title: "FINTECH APPLICATIONS",
      subtitle:
        "Facilitate financial operations with tech-savvy solutions. Our custom solutions are fast, secure, scalable, and can be easily integrated with e-payment technologies.",
    },
    {
      img: img14,
      title: "AUTOMOTIVE",
      subtitle:
        "Build the next generation of vehicles with our custom web application development. Our 10 years of expertise help us to develop robust embedded entertainment systems and bugfree software for autonomous and connected cars.",
    },
  ];
  const bigSwiper = [
    {
      img: img2,
      name: "Yuriy Semenchuk",
      position: "Business Car  ",
      job: "General Director",
      title:
        "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose SumatoSoft. We are pleased to mention that the work is done to the full extent, on time and on a high quality level. We recommend SumatoSoft as a reliable partner in the sphere of development and implementation of complex business solutions.",
    },
  ];
  const smallSwiper = {
    img1: img15,
    img2: img16,
    img3: img17,
    img4: img18,
    img5: img19,
    img6: img20,
    title: "Recent Software We Made",
  };
  const flexCard = [
    {
      img: img21,
      text: "R&D & ANALYSIS",
      children: {
        p: "Our R&D and business analyst team studies your business and idea in detail to help you reduce market and technical risks across the entire web application development.",
        ul: [
          { li: "Validate business idea" },
          { li: "Create solution vision" },
          { li: "Choose the right technology" },
          { li: "Get exact project estimation" },
          { li: "Plan the product release" },
          { li: "Avoid unplanned costs" },
        ],
      },
    },
    {
      img: img22,
      text: "APP DESIGN",
      children: {
        p: "We follow a thorough web design approach which is focused on the way people interact with websites to ensure the interfaces are not only user-friendly but also are focused on targeted action.",
        ul: [
          { li: "Research users and marketing" },
          { li: "Develop Information Architecture" },
          { li: "Make wireframes and clickable prototypes" },
          { li: "Design and animate the interface" },
          { li: "Create design systems" },
          { li: "Analyze users experience" },
        ],
      },
    },
    {
      img: img23,
      text: "FRONTEND & BACKEND DEVELOPMENT ",
      children: {
        p: "Our frontend and backend software developers have worked on and successfully delivered custom web applications of different complexity, reliable and scalable software that works on our client’s business.",
        ul: [
          { li: "Ensure pixel-perfect accuracy" },
          { li: "Don’t compromise performance with animations" },
          { li: "Build solid scalable architecture" },
          { li: "Flexibility with 3rd parties systems integration" },
          { li: "Get, store and analyze tons of data" },
          { li: "Make users, processes, and data secured" },
        ],
      },
    },
    {
      img: img24,
      text: "QA & TESTING",
      children: {
        p: "Our QA pros join the web development team from day one to build a professional and holistic approach to Quality Assurance and make sure that the website works perfectly across all devices, browsers, screens, at any load and environment. .",
        ul: [
          { li: "Automate repetitive tasks" },
          { li: "Minimize risks of unmet expectations" },
          { li: "Reduce time-to-market" },
          { li: "Quickly improve the product" },
          { li: "Ensure the process transparency" },
          { li: "Track the web development progress" },
        ],
      },
    },
    {
      img: img25,
      text: "IT STAFF AUGMENTATION",
      children: {
        p: "Our specialists are ready to join your internal team on a contractual basis and help with custom web application development. If the expertise of your inner team isn’t enough to develop the web app or project, we can handle these issues.",
        ul: [
          {
            li: "All types of professionals: business analysts, developers, designers, QA specialists",
          },
          { li: "70% of senior specialists" },
          { li: "Our specialists adjust to your internal schedule " },
          { li: "Short and long-term cooperation" },
          { li: "On-demand scaling" },
          { li: "Quick onboarding" },
          { li: "Transparent hiring prices" },
        ],
      },
    },
  ];
  const features = [
    {
      img: img26,
      title: "3RD PARTY SERVICES INTEGRATION",
      subtitle:
        "Web applications are easily connected to multiple third-party services, starting with payment gateways and ending with business automation services.",
    },
    {
      img: img27,
      title: "HIGHEST SECURITY",
      subtitle:
        "During custom web application development, we focus on making our web apps highly secured by implementing role-based permission systems, transactions and data sharing protection.",
    },
    {
      img: img28,
      title: "CLOUD-BASED",
      subtitle:
        "In addition to the modular architectural approach, cloud-native architecture implies the adoption of cloud services, cutting-edge real-time technologies and leveraging managed services from cloud vendors.",
    },
    {
      img: img29,
      title: "MICROSERVICES-BASED APPLICATIONS",
      subtitle:
        "We follow a microservices-based architectural approach that leads to creating independent reusable software modules which communicate via APIs to external and internal services.",
    },
    {
      img: img30,
      title: "UNIVERSAL ACCESSIBILITY",
      subtitle:
        "Users can access functionality and content of custom web applications from anywhere, anytime and from any device. All the data and content are synchronized in real time.",
    },
  ];
  const softCard = [
    {
      img: img31,
      title: "Recognized by Clutch.co",
    },
    {
      img: img32,
      title: "AMAZON Consulting Partner",
    },
    {
      img: img33,
      title: "Recognized by GoodFirms.co",
    },
    {
      img: img34,
      title: "Recognized by TopDigital.Agency",
    },
    {
      img: img35,
      title: "Recognized by  TechReviewer.co",
    },
    {
      img: img36,
      title: "Hign Tech Park Resident",
    },
  ];
  const animationCardLeft = [
    {
      img1: img37,
      img2: "",
      title: "Research",
      ul: [
        { li: "Interview stakeholders" },
        { li: "Key apps competitor analysis" },
        { li: "Marketing and user analysis" },
      ],
    },
    {
      img1: img38,
      img2: "",
      title: "Design",
      ul: [
        { li: "Develop Information Architecture" },
        { li: "Wireframing" },
        { li: "Prototyping" },
        { li: "Animation of the interfaces" },
      ],
    },
    {
      img1: img38,
      img2: "",
      title: "Quality Assurance",
      ul: [
        { li: "Functional testing" },
        { li: "Non-functional testing" },
        { li: "Change testing" },
      ],
    },
    {
      img1: img38,
      img2: "",
      title: "Post-release support",
      ul: [
        { li: "Modification of existing functionality" },
        { li: "New features development" },
        { li: "Libraries and frameworks update" },
      ],
    },
  ];

  const animationCardRight = [
    {
      img1: img40,
      img2: " ",
      title: "Discovery",
      ul: [
        { li: "Creating of a shared product vision" },
        {
          li: "Development of a requirements specification with release priorities",
        },
        { li: "Preparation of a roadmap with a release timeline" },
        { li: "Building of an app architecture" },
      ],
    },
    {
      img1: img39,
      img2: "",
      title: "Programming",
      ul: [
        { li: "Backend development" },
        { li: "Frontend development" },
        { li: "Performance optimization" },
        { li: "API Integration" },
      ],
    },
    {
      img1: img39,
      img2: "",
      title: "Deployment",
      ul: [
        { li: "App Store" },
        { li: "Google Play" },
        { li: "Software implementation" },
      ],
    },
  ];
  const acardion = [
    {
        title:"What is custom web application?",
        text: "No answers",
        id: "1"
    },
    {
        title:"What is custom application development services?",
        text: "No answers",
        id: "2"
    },
    {
        title:"What does web development services include?",
        text: "No answers",
        id: "3"
    },
    {
        title:"Why Moomkin?",
        text: "No answers",    
        id: "4"
    },
]

  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.headLine}>
            <HeadLine data={headLine} hidden={true} sizeTitle="45px" >
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
        <p>
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
      <ProjectAnalysis/>
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

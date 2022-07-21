import img1 from "../../../assets/icons/INDUSTRY-ANALYSIS.svg";
import img2 from "../../../assets/icons/TECHNICAL-RESEARCH.svg";
import img3 from "../../../assets/icons/COMPETITOR-ANALYSIS.svg";
import img4 from "../../../assets/icons/TECHNICAL-DOCUMENTATION.svg";

import img5 from "../../../assets/icons/REQUIREMENTS.svg";
import img6 from "../../../assets/icons/USER-INTERFACE.svg";
import img7 from "../../../assets/icons/PROTOTYPING.svg";
import img8 from "../../../assets/icons/DOCUMENTATION.svg";

import img9 from "../../../assets/images/mehrigiyo.jpg";
import img10 from "../../../assets/images/napa.png";
import img11 from "../../../assets/images/kingbok.jpg";
import img12 from "../../../assets/images/edcontrol.png";
import img13 from "../../../assets/images/adliya_vazirligi.png";
import img14 from "../../../assets/images/it-park.jpg";

import img15 from "../../../assets/images/img1.jpg";
import img16 from "../../../assets/images/img2.jpg";
import img17 from "../../../assets/images/img3.jpg";
import img18 from "../../../assets/images/img4.jpg";
import img19 from "../../../assets/images/img5.jpg";

import img20 from "../../../assets/icons/sertificat-1.svg";
import img21 from "../../../assets/icons/sertificat-2.svg";
import img22 from "../../../assets/icons/sertificat-3.svg";
import img23 from "../../../assets/icons/sertificat-4.svg";
import img24 from "../../../assets/icons/sertificat-5.svg";
import img25 from "../../../assets/icons/sertificat-6.svg";

import styles from "./Business.module.scss";
export const menu = [
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Business Analysis",
    link: "",
  },
];
export const arr = [
  {
    img: img1,
    title: "INDUSTRY ANALYSIS",
    subtitle:
      "When developing a product, it is necessary to take into account features of the industry where it will be applied. Rules that work for one industry will not always work in the other. At the Discovery Phase, study of your industry specific business processes allows implementation of the best practices and tools.",
  },
  {
    img: img2,
    title: "TECHNICAL RESEARCH",
    subtitle:
      "There are no two identical projects and each product includes certain business and technical requirements that must be taken into account at the very early stages of development. The result of the Discovery Phase of the project will be a list of recommended technologies and frameworks to use.",
  },
  {
    img: img3,
    title: "COMPETITOR ANALYSIS",
    subtitle:
      "One of the parts of business analysis services is the research of your competitors, weak spots in their products, and improvements that can be implemented in your product to get a competitive advantage. ",
  },
  {
    img: img4,
    title: "TECHNICAL DOCUMENTATION",
    subtitle:
      "Tech specification is a crucial part of a project. The success and on-time completion of the project as well as its future development highly depends on how thoroughly the project is clarified and described, how correctly it is reflected in the technical specification.",
  },
];
export const businessCards = [
  {
    img: img5,
    title: "REQUIREMENTS DEFINITION AND CLARIFICATION",
    subtitle: (
      <div className={styles.businessCards}>
        <p>
          Capturing the right requirements at the Discovery Phase builds a solid
          foundation for its future success.
        </p>
        <ul>
          <li>Industry & competitor analysis</li>
          <li>Technical research</li>
          <li>Analysis</li>
          <li>Specification</li>
        </ul>
      </div>
    ),
  },
  {
    img: img6,
    title: "USER INTERFACE DESIGN AT THE HIGHEST LEVEL",
    subtitle: (
      <div className={styles.businessCards}>
        <p>
          Working out the most efficient user flow patterns to ensure the target
          actions are completed easily by each type of user.
        </p>
        <ul>
          <li>Information architecture (IA)</li>
          <li>Wireframes of major pages</li>
          <li>Reports</li>
        </ul>
      </div>
    ),
  },
  {
    img: img7,
    title: "PROTOTYPING AND PROOF-OF-CONCEPT WORK",
    subtitle: (
      <div className={styles.businessCards}>
        <p>
          Business analysts help to evaluate the potential and value of the
          future application to satisfy business needs and meet all business
          requirements
        </p>
        <ul>
          <li>UI prototype</li>
          <li>System prototype</li>
          <li>Detailed mockups</li>
        </ul>
      </div>
    ),
  },
  {
    img: img8,
    title: "DOCUMENTATION & ESTIMATION",
    subtitle: (
      <div className={styles.businessCards}>
        <p>
          All results of the Business Analysis Services will be recorded in one
          document - Requirements Specification (SRS) which includes
        </p>
        <ul>
          <li>Software requirements analysis</li>
          <li>Project risk assessment</li>
          <li>Feature list and mockups</li>
          <li>Implementation budget and deadline</li>
        </ul>
      </div>
    ),
  },
];
export const obj = {
  img1: img9,
  img2: img10,
  img3: img11,
  img4: img12,
  img5: img13,
  img6: img14,
  title: "Recent Projects We Made",
};
export const images = [
  { img: img15, name: "foto" },
  { img: img16, name: "foto" },
  { img: img17, name: "foto" },
  { img: img18, name: "foto" },
  { img: img19, name: "foto" },
];
export const results = [
  { title: "Document describing the project and its project boundaries" },
  { title: "Project requirements specification" },
  { title: "Technical specification and requirements" },
  { title: "Use case model" },
  { title: "User stories" },
  { title: "User Interface Prototypes" },
  { title: "Project estimation and timeline" },
];
export const swiper = [
  {
    img: img17,
    name: "Ne'matov Xurshid",
    position: "Tartle",
    job: "CEO",
    title:
      "We tried another company that one of our partners had used but they didn’t work out. I feel that SumatoSoft does a better investigation of what we’re asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
  },
  {
    img: img19,
    name: "Ne'matov Xurshid",
    position: "Tartle",
    job: "CEO",
    title: `The system has produced a significant competitive advantage in the industry thanks to SumatoSoft’s well-thought opinions. They shouldered the burden of export constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.`,
  },
];
export const process = [
  { title: "Plan Business Analysis Process" },
  { title: "Define Scope" },
  { title: "Elicit Requirements" },
  { title: "Validate Requirements" },
  { title: "Analyze Requirements" },
  { title: "Document Requirements" },
];
export const softCard = [
  {
    img: img20,
    title: "Recognized by Clutch.co",
  },
  {
    img: img21,
    title: "AMAZON Consulting Partner",
  },
  {
    img: img22,
    title: "Recognized by GoodFirms.co",
  },
  {
    img: img23,
    title: "Recognized by TopDigital.Agency",
  },
  {
    img: img24,
    title: "Recognized by  TechReviewer.co",
  },
  {
    img: img25,
    title: "Hign Tech Park Resident",
  },
];

export const acardion = [
  {
    title: "When should I use Business Analysis Services?",
    text: "The best time to go through the Discovery Phase is at the start of any major project or building any complex system, especially when there is not enough information gathered about the market or users. We also recommend keeping the business analyst as a part of the internal IT team to keep the requirements and the software up-to-date and aligned with your business’s needs.        ",
    id: "1",
  },
  {
    title: "Why is pre-development Discovery Phase necessary?",
    text: "There are 2 key reasons.The first one is that analysis helps businesses to create the whole picture of the final solution,to define the goals which businesses want to achieve, and how they can estimate the success of a project in the future.The second one is to provide the design, development, and QA teams with all necessary information required to build the right groundwork (e.g. - architecture) and release the application within the timeline and budget.",
    id: "2",
  },
  {
    title:
      "How does ongoing Business Analysis differ from the initial Business Analysis (Discovery Phase)?",
    text: "Discovery Phase is the time when we work on the project analysis and planning. It is a very active phase, both for our clients and our team, when we perform lots of sessions. Ongoing business analysis isn’t so time-intensive we just need to support the requirements up-to-date to the business changes.",
    id: "3",
  },
];
export const headData = {
  title: "Business Analysis Services",
  children: (
    <div className={styles.headContainer}>
      <p className={styles.headTitle}>
        We use the best Business Analysis practices for software development to
        bridge a gap between the business needs and the IT team.
      </p>
      <ul className={styles.headUl}>
        <li>Solution vision</li>
        <li>Requirements description</li>
        <li>Precise project estimation</li>
        <li>Release planning</li>
      </ul>
    </div>
  ),
};

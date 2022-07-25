import styles from "./index.module.scss";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";

import img4 from "../../../assets/icons/DESIGN-FOR-WEB.svg";
import img5 from "../../../assets/icons/DESIGN-FOR-MOBILE.svg";
import img6 from "../../../assets/icons/VISUALIZATION.svg";
import img7 from "../../../assets/icons/WIREFRAMING.svg";

import img8 from "../../../assets/images/mehrigiyo.jpg";
import img9 from "../../../assets/images/kingbok.jpg";
import img10 from "../../../assets/images/it-park.jpg";
import img11 from "../../../assets/images/napa.png";
import img12 from "../../../assets/images/edcontrol.png";
import img13 from "../../../assets/images/adliya_vazirligi.png";

import img14 from "../../../assets/icons/price.svg";
import img15 from "../../../assets/icons/time.svg";
import img16 from "../../../assets/icons/english.svg";

import img17 from "../../../assets/icons/Research.svg";
import img18 from "../../../assets/icons/Research1.svg";
import img19 from "../../../assets/icons/Analysis2.svg";
import img20 from "../../../assets/icons/Analysis1.svg";
import img21 from "../../../assets/icons/Design.svg";
import img22 from "../../../assets/icons/Design1.svg";
import img23 from "../../../assets/icons/Implementation.svg";
import img24 from "../../../assets/icons/Implementation1.svg";
import img25 from "../../../assets/icons/Post-release.svg";
import img26 from "../../../assets/icons/Post-release1.svg";

export const menu = [
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Web App Design Services",
    link: "",
  },
];

export const headLine = {
  title: "UI and UX Design Services",
  children: (
    <div className={styles.headLine}>
      <p>
        SumatoSoft offers UI and UX design services that help brands create a
        human-centered design to attract new users, inspire them to buy your
        product, and build trust. Want to build your product with a team that
        establishes a clear design process and produces valuable results on
        time?
      </p>
      <p>
        Want to build your product with a team that establishes a clear design
        process and produces valuable results on time?{" "}
      </p>
      <ul>
        <li>Websites and web applications</li>
        <li>Mobile applications</li>
        <li>Complex interfaces</li>
      </ul>
    </div>
  ),
};

export const animationText = {
  title: "25 % of users.",
  subtitle:
    "abandon an app after the first use. Poor UX and UI is what makes the first impression negative.",
};

export const results = [
  { title: "Agile Approach to UX/UI design services" },
  { title: "Deep design expertise" },
  { title: "Personal commitment" },
  { title: "Regular reporting" },
];

export const tinySwiper = [
  { img: img1, name: "image" },
  { img: img2, name: "image" },
  { img: img3, name: "image" },
];

export const uxDesignCard = [
  {
    img: img4,
    title: "UI AND UX DESIGN FOR WEB",
    children:
      "We follow proven best practices in usability, compatibility, and accessibility in web products development and build convenient, user-friendly, and intuitive UI.",
  },
  {
    img: img5,
    title: "UI AND UX DESIGN FOR MOBILE",
    children:
      "The main challenge in creating a good user experience in a mobile application is to strike a balance between following standard guidelines and adjusting them to make the application unique.",
  },
  {
    img: img6,
    title: "DATA VISUALIZATION",
    children:
      "Data visualization is the process of converting measurable information from text/graphics to graphical formats. Our UI and UX design services team designers will help you transform complex segmented information into simple and intuitive dashboards",
  },
  {
    img: img7,
    title: "WIREFRAMING AND PROTOTYPING",
    children:
      "Prototypes (done in HTML or using InVision) and wireframes help to quickly visualize complex ideas and put them into practice. At SumatoSoft design studio, a part of UI and UX design services is prototyping. We start prototyping after conducting preliminary research and formulating requirements.",
  },
];

export const swpier = {
  img1: img8,
  img2: img9,
  img3: img10,
  img4: img11,
  img5: img12,
  img6: img13,
  title: "Our UI And UX App Design Portfolio ",
};

export const benefitsCard = [
  {
    img: img14,
    title: "2X LESS TIME SPENT ON DEVELOPMENT-READY DESIGN",
  },
  {
    img: img15,
    title: "25% CUT TIME ON UI DESIGN",
  },
  {
    img: img16,
    title: "30% CUT TIME ON NEW DESIGN DELIVERY",
  },
];

export const bigSwiper = [
  {
    img: img1,
    name: "Yevgeniy Rozenblat",
    position: "Program Manager",
    job: "TL Nika",
    title:
      "SumatoSoft succeeded in building a more manageable solution that is much easier to maintain. Although they are a small team, their project management reflects the excellence of a larger company. Their team delivers high-quality results, attentive service, and reasonable pricing.",
  },
  {
    img: img2,
    name: "Yevgeniy Rozenblat",
    position: "Program Manager",
    job: "TL Nika",
    title:
      "SumatoSoft succeeded in building a more manageable solution that is much easier to maintain. Although they are a small team, their project management reflects the excellence of a larger company. Their team delivers high-quality results, attentive service, and reasonable pricing.",
  },
];

export const animationCardLeft = [
  {
    img1: img17,
    img2: img18,
    title: "1.Research",
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
    ul: [{ li: "Analyze users experience" }, { li: "Design optimization" }],
  },
];

export const animationCardRight = [
  {
    img1: img20,
    img2: img19,
    title: "2. Analysis",
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
    ul: [{ li: "Supervise the design" }, { li: "Create design systems" }],
  },
];

export const acardion = [
    {
        title:"What are UI UX design services?",
        text: "No answers",
        id: "1"
    },
    {
        title:"What does a UI/UX designer do?",
        text: "No answers",
        id: "2"
    },
    {
        title:"What services does UX design include?",
        text: "No answers",
        id: "3"
    },
    {
        title:"Why are UX design services important?",
        text: "No answers",    
        id: "4"
    },
]

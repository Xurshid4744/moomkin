import React from "react";
import BusinessResults from "../../../../components/BusinessResults/BusinessResults";
import ProjectAnalysis from "../../../../components/ProjectAnalysis/ProjectAnalysis";
import DiscussProject from "../../../../components/DiscussProject/DiscussProject";
import SmallSwiper from "../../../../components/Swipers/SmallSwiper/SmallSwiper";
import TinySwiper from "../../../../components/Swipers/TinySwiper/TinySwiper";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";
import CardFlexBottom from "./_components/CardFlexBottom/CardFlexBottom";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import Title from "../../../../components/Title/Title";
import CardFlex from "./_components/CardFlex/CardFlex";

import recenSoftwareImg1 from "../../../../assets/images/recenSoftwareImg1.png";
import recenSoftwareImg2 from "../../../../assets/images/recenSoftwareImg2.jpg";
import recenSoftwareImg3 from "../../../../assets/images/recenSoftwareImg3.jpg";
import recenSoftwareImg4 from "../../../../assets/images/recenSoftwareImg4.jpg";
import recenSoftwareImg5 from "../../../../assets/images/recenSoftwareImg5.jpg";
import recenSoftwareImg6 from "../../../../assets/images/recenSoftwareImg6.jpg";

import TinySwiper1 from "../../../../assets/images/img1.jpg";
import TinySwiper2 from "../../../../assets/images/img2.jpg";
import TinySwiper3 from "../../../../assets/images/img3.jpg";
import TinySwiper4 from "../../../../assets/images/img4.jpg";
import TinySwiper5 from "../../../../assets/images/img5.jpg";
import TinySwiper6 from "../../../../assets/images/img6.jpg";

import Yevgeniy from "../../../../assets/images/yevgeniy.jpeg";
import Alexander from "../../../../assets/images/alexander.jpg";
import Michael from "../../../../assets/images/Karbushev.jpg";
import Kubka from "../../../../assets/images/andreyKubka.jpg";
import Maria from "../../../../assets/images/maria.jpg";
import Yuriy from "../../../../assets/images/yuriy.jpg";

import styles from "./Commerce.module.scss";

const Commerce = () => {
  const data = [
    {
      label: "Expertise & Industries",
      link: "/",
    },
    {
      label: "Ecommerce Application Development",
      link: "/",
    },
  ];

  const object = {
    img1: recenSoftwareImg1,
    img2: recenSoftwareImg2,
    img3: recenSoftwareImg3,
    img4: recenSoftwareImg4,
    img5: recenSoftwareImg5,
    img6: recenSoftwareImg6,
    title: "Recent Software We Made",
  };

  const titles = [
    {
      title:
        "A software development company with strong experience in eCommerce applications development using various technologies and platforms.",
    },
    {
      title:
        "Our team consists of highly skilled designers that have built a bunch of eCommerce platforms. They design good-selling UX/UI interfaces and clear user-friendly shopping cards for custom eCommerce solutions and mobile apps.",
    },
    {
      title:
        "A comprehensive quality testing approach, including functional and load testing, makes sure your eCommerce application will manage lots of users.",
    },
    {
      title: "Transparency of the entire software development life cycle.",
    },
    {
      title:
        "We offer impressive quality for a moderate eCommerce website development cost.",
    },
    {
      title:
        "Our digital solutions bring real value to businesses and end-users.",
    },
  ];

  const tinySwiper = [
    {
      img: TinySwiper1,
    },
    {
      img: TinySwiper2,
    },
    {
      img: TinySwiper3,
    },
    {
      img: TinySwiper4,
    },
    {
      img: TinySwiper5,
    },
    {
      img: TinySwiper6,
    },
  ];

  const bigSwiper = [
    {
      img: Yevgeniy,
      name: "Yevgeniy Rozenblat",
      position: "Program Manager",
      job: "TL Nika",
      title:
        "SumatoSoft succeeded in building a more manageable solution that is much easier to maintain. Although they are a small team, their project management reflects the excellence of a larger company. Their team delivers high-quality results, attentive service, and reasonable pricing.",
    },
    {
      img: Alexander,
      name: "Alexander McCaig",
      position: "Co-Founder & CEO",
      job: "Tartle",
      title:
        "The system has produced a significant competitive advantage in the industry thanks to SumatoSoft’s well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    },
    {
      img: Michael,
      name: "Michael Karbushev",
      position: "Senior Director of Engineering",
      job: "Evolv",
      title:
        "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    },
    {
      img: Kubka,
      name: "Andrey Kubka",
      position: "Product Technology Manager",
      job: "Mediatron",
      title:
        "SumatoSoft team not only knew well how to build a partnership-based working process, but also offered sensible suggestions and advice helping us to reach the long-term business goals.",
    },
    {
      img: Maria,
      name: "Maria Duyunova",
      position: "Director",
      job: "Simplimagine LLC",
      title:
        "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork (and Captain Obvious is on our side!). But the teams may vary on the degree of their cohesion.",
    },
    {
      img: Yuriy,
      name: "Yuriy Semenchuk",
      position: "General Director",
      job: "Business Car",
      title:
        "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose SumatoSoft. We are pleased to mention that the work is done to the full extent, on time and on a high quality level.",
    },
  ];

  return (
    <>
      <section className={styles.container}>
        <div className="globalContainer">
          <BreadCrumb menu={data} />
          <div className={styles.titles}>
            <h4 className={styles.titles__title}>
              Ecommerce Application Development
            </h4>
            <p className={styles.titles__text}>
              Following the latest and cutting-edge digital market trends in
              eCommerce software development, we provide the best shopping
              experience to your clients.
            </p>
            <p className={styles.titles__text}>
              During custom eCommerce website development, we use brand-new ways
              to optimize customer service and order processes.
            </p>
            <ul className={styles.bottom}>
              <li className={styles.bottom__text}>
                Conversion-focused app design
              </li>
              <li className={styles.bottom__text}>Mobile app development</li>
              <li className={styles.bottom__text}>
                Custom eCommerce solutions
              </li>
              <li className={styles.bottom__text}>
                Fast loading speed solutions development
              </li>
              <li className={styles.bottom__text}>
                Multilingual & multi currency support
              </li>
              <li className={styles.bottom__text}>
                Integrations with 3rd party services
              </li>
              <li className={styles.bottom__text}>SEO-ready solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "150px" }}>
        <div className="globalContainer">
          <h1 className={styles.ecommere_title}>
            Ecommerce App Development Services For Any Business
          </h1>
          <CardFlex />
        </div>
      </section>

      <section className={styles.choose_card}>
        <div className="globalContainer">
          <Title
            title={"Choose An Effective Way To Build  ECommerce Platform"}
          />
          <div className={styles.texts}>
            <p className={styles.text}>
              Custom eCommerce application development is not the ultimate
              one-stop solution. To ensure the best quality of
            </p>
            <p className={styles.text}>
              software development services and accelerate the release of the
              eCommerce web app, we use the Spree Commerce
            </p>
            <p className={styles.text}>or Shopify platforms.</p>
          </div>
          <CardFlexBottom />
        </div>
      </section>

      <section className={styles.softwareCard}>
        <div className="globalContainer">
          <div className={styles.card_wrap}>
            <SmallSwiper obj={object} />
          </div>
        </div>
      </section>

      <section className={styles.app_development}>
        <div className="globalContainer">
          <Title title={"Why Ecommerce App Development With SumatoSoft"} />

          <div className={styles.swiperWrapper}>
            <div className={styles.swiperWrapper__titles}>
              <BusinessResults data={titles} />
            </div>
            <TinySwiper data={tinySwiper} />
          </div>
        </div>
      </section>

      <section className={styles.big__Swiper}>
        <div className="globalContainer">
          <Title title={"Our Happy Clients"} />
          <BigSwiper obj={bigSwiper} />
        </div>
      </section>

      <div>
        <ProjectAnalysis />
      </div>
    </>
  );
};

export default Commerce;

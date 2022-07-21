import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import styles from "./EngagementModels.module.scss";
import Title from "../../../components/Title/Title";
import SoftwareCard from "../../../components/Cards/SoftwareCard/SoftwareCard";
import TimeMaterialModel from "./_components/TimeMaterialModel/TimeMaterialModel";
import EffectiveProject from "./_components/EffectiveProject/EffectiveProject";
import SmallSwiper from "../../../components/Swipers/SmallSwiper/SmallSwiper";
import BigSwiper from "../../../components/Swipers/BigSwiper/BigSwiper";

import Img1 from "../../../assets/icons/price.svg";
import Img2 from "../../../assets/icons/time.svg";
import Img3 from "../../../assets/icons/english.svg";

import img1 from "../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../assets/images/napa.png";
import img3 from "../../../assets/images/kingbok.jpg";
import img4 from "../../../assets/images/edcontrol.png";
import img5 from "../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../assets/images/it-park.jpg";

import PaulChun from '../../../assets/images/paulchun.jpg';
import Andrey from '../../../assets/images/andreyKubka.jpg';
import Ekaterina from '../../../assets/images/ekaterina.jpg';
import Michael from '../../../assets/images/michael.jpg';
import Damian from '../../../assets/images/damian.jpg';
import Yuriy from '../../../assets/images/yuriy.jpg';
import ProjectAnalysis from "../../../components/ProjectAnalysis/ProjectAnalysis";

const EngagementModels = () => {
  const data = [
    {
      label: "Engagement Models",
      link: "",
    },
  ];
  const data2 = {
    title: "Our Recent Works",
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
  };
  const data3 = [
    {
      img: PaulChun,
      name: "Paul S. Chun",
      position: "Business Car",
      job: "General Director",
      title:
        "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose SumatoSoft. We are pleased to mention that the work is done to the full extent, on time and on a high quality level. We recommend SumatoSoft as a reliable partner in the sphere of development and implementation of complex business solutions.",
    },
    {
      img: Andrey,
      name: "Andrey Kubka",
      position: "Mediatron",
      job: "Product Technology Manager",
      title:
        "SumatoSoft team not only knew well how to build a partnership-based working process, but also offered sensible suggestions and advice helping us to reach the long-term business goals.We are completely satisfied with the results of our cooperation and will be happy to recommend SumatoSoft as a reliable and competent partner for development of web-based solutions",
    },
    {
      img: Ekaterina,
      name: "Ekaterina Bromberg",
      position: "MyMediAds.com",
      job: "Co-Founder",
      title:
        "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the SumatoSoft team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work.",
    },
    {
      img: Michael,
      name: "Michael Karbushev",
      position: "Evolv",
      job: "Senior Director of Engineering",
      title:
        "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    },
    {
      img: Damian,
      name: "Damian Gevertz",
      position: "Widgety",
      job: "Founder & CEO",
      title:
        "We tried another company that one of our partners had used but they didn’t work out. I feel that SumatoSoft does a better investigation of what we’re asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    },
    {
      img: Yuriy,
      name: "Yuriy Semenchuk",
      position: "Business Car",
      job: "General Director",
      title:
        "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose SumatoSoft. We are pleased to mention that the work is done to the full extent, on time and on a high quality level. We recommend SumatoSoft as a reliable partner in the sphere of development and implementation of complex business solutions.",
    },
  ];

  return (
    <>
      <section className={styles.container}>
        <div className="globalContainer">
          <BreadCrumb menu={data} />
          <div className={styles.headline}>
            <Title
              color={"#fff"}
              title="Flexible and Client-Oriented Engagement Models"
            />
            <div className={styles.moreDetail}>
              Depending on the project requirements and specifications,
              resources available and timeframes, we propose 3 major engagement
              models: Fixed Price, Time & Material and Dedicated Team.
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wrapper}>
        <div className={styles.images}>
          <SoftwareCard clas={false} img={Img1} title="FIXED PRICE" />
          <SoftwareCard clas={false} img={Img2} title="TIME & MATERIAL" />
          <SoftwareCard clas={false} img={Img3} title="DEDICATED TEAM" />
        </div>
        <div>
          <TimeMaterialModel />
        </div>
        <div>
          <EffectiveProject />
        </div>
        <div>
          <SmallSwiper obj={data2} />
        </div>
        <div className="globalContainer">
          <BigSwiper obj={data3} />
        </div>
        <div className={styles.marginTop}>
          <ProjectAnalysis/>
        </div>
      </section>
    </>
  );
};

export default EngagementModels;

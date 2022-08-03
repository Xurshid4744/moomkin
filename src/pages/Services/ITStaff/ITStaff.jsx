import React from 'react';
import BusinessResults from '../../../components/BusinessResults/BusinessResults';
import DiscussProject from '../../../components/DiscussProject/DiscussProject';
import TinySwiper from '../../../components/Swipers/TinySwiper/TinySwiper';
import SoftwareCard from '../../../components/Cards/SoftwareCard/SoftwareCard';
import FlexCard from '../../../components/Cards/FlexCard/FlexCard';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import Button from '../../../components/Button/Button';
import Title from '../../../components/Title/Title';

import TinySwiper1 from '../../../assets/images/img1.jpg'
import TinySwiper2 from '../../../assets/images/img2.jpg'
import TinySwiper3 from '../../../assets/images/img3.jpg'
import TinySwiper4 from '../../../assets/images/img4.jpg'
import TinySwiper5 from '../../../assets/images/img5.jpg'
import TinySwiper6 from '../../../assets/images/img6.jpg'

import ITStaffGetCard1 from '../../../assets/images/ITStaffGetCard1.svg';
import ITStaffGetCard2 from '../../../assets/images/ITStaffGetCard2.svg';
import ITStaffGetCard3 from '../../../assets/images/ITStaffGetCard3.svg';
import ITStaffGetCard4 from '../../../assets/images/ITStaffGetCard4.svg';

import ITStaffTeamCard1 from '../../../assets/images/ITStaffTeamCard1.svg';
import ITStaffTeamCard2 from '../../../assets/images/ITStaffTeamCard2.svg';
import ITStaffTeamCard3 from '../../../assets/images/ITStaffTeamCard3.svg';
import ITStaffTeamCard4 from '../../../assets/images/ITStaffTeamCard4.svg';

import ITStaffTermsCard1 from '../../../assets/images/ITStaffTermsCard1.svg';
import ITStaffTermsCard2 from '../../../assets/images/ITStaffTermsCard2.svg';

import Yevgeniy from '../../../assets/images/yevgeniy.jpeg';
import Alexander from '../../../assets/images/alexander.jpg';
import Michael from '../../../assets/images/Karbushev.jpg';
import Kubka from '../../../assets/images/andreyKubka.jpg'
import Maria from '../../../assets/images/maria.jpg';
import Yuriy from '../../../assets/images/yuriy.jpg';

import AnimationCard from '../../../components/Cards/AnimationCard/AnimationCard';
import { animationCardLeft, animationCardRight } from './helper';


import styles from './ITStaff.module.scss';
import BigSwiper from '../../../components/Swipers/BigSwiper/BigSwiper';
import ProjectAnalysis from '../../../components/ProjectAnalysis/ProjectAnalysis';

const ITStaff = () => {

  const data = [
    {
      label: "Services",
      link: "/"
    },
    {
      label: "IT Staff Augmentation",
      link: "/"
    }
  ]

  const titles = [
    {
      title: "9 years on the market of software development"
    },
    {
      title: "100+ successful projects and 50+ specialists on board."
    },
    {
      title: "30+ senior engineers are ready to extend the capacity of your team. "
    },
    {
      title: "No communication barrier, since all specialists speak English well."
    },
    {
      title: "Your project data stays safe. We guarantee the security of all data which relates to your project."
    },
    {
      title: "We work honestly and openly. We have a transparent hiring process and offer fair rates."
    },
  ]

  const tinySwiper = [
    {
      img: TinySwiper1
    },
    {
      img: TinySwiper2
    },
    {
      img: TinySwiper3
    },
    {
      img: TinySwiper4
    },
    {
      img: TinySwiper5
    },
    {
      img: TinySwiper6
    },
  ]

   const bigSwiper = [
    {
      img: Yevgeniy,
      name: "Yevgeniy Rozenblat",
      position: "Program Manager",
      job: "TL Nika",
      title: "SumatoSoft succeeded in building a more manageable solution that is much easier to maintain. Although they are a small team, their project management reflects the excellence of a larger company. Their team delivers high-quality results, attentive service, and reasonable pricing."
    },
    {
      img: Alexander,
      name: "Alexander McCaig",
      position: "Co-Founder & CEO",
      job: "Tartle",
      title: "The system has produced a significant competitive advantage in the industry thanks to SumatoSoft’s well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution."
    },
    {
      img: Michael,
      name: "Michael Karbushev",
      position: "Senior Director of Engineering",
      job: "Evolv",
      title: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with."
    },
    {
      img: Kubka,
      name: "Andrey Kubka",
      position: "Product Technology Manager",
      job: "Mediatron",
      title: "SumatoSoft team not only knew well how to build a partnership-based working process, but also offered sensible suggestions and advice helping us to reach the long-term business goals."
    },
    {
      img: Maria,
      name: "Maria Duyunova",
      position: "Director",
      job: "Simplimagine LLC",
      title: "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork (and Captain Obvious is on our side!). But the teams may vary on the degree of their cohesion."
    },
    {
      img: Yuriy,
      name: "Yuriy Semenchuk",
      position: "General Director",
      job: "Business Car",
      title: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose SumatoSoft. We are pleased to mention that the work is done to the full extent, on time and on a high quality level."
    },
  ]

  return (
    <>
      <section className={styles.container1}>
        <div className="globalContainer">
          <BreadCrumb menu={data} />
          <div className={styles.titles}>
            <h1 className={styles.titles__title}>IT Staff Augmentation</h1>
            <p className={styles.titles__text}>Ready-to-go and a custom-hired team of software engineers, Scrum Masters, Designers, and QA specialists just for your project</p>
            <ul className={styles.bottom}>
              <li className={styles.bottom__text}>WEB DEVELOPERS</li>
              <li className={styles.bottom__text}>MOBILE DEVELOPERS</li>
              <li className={styles.bottom__text}>DESIGNERS</li>
              <li className={styles.bottom__text}>QA AND TESTING ENGINEERS</li>
            </ul>
          </div>
          <Button title={"GET IN TOUCH"} />
        </div>
      </section>

      <section className={styles.container2}>
        <div className="globalContainer">
          <Title title={"Why SumaSoft?"} />
          <div className={styles.swiperWrapper}>
            <div className={styles.swiperWrapper__titles}>
              <BusinessResults data={titles} />
            </div>
            <TinySwiper data={tinySwiper} />
          </div>
        </div>
      </section>

      <section className={styles.container3}>
        <div className="globalContainer">
          <Title title={"What You Will Get"} />
          <div className={styles.card3_wrapper}>
            <div className={styles.card3_wrapper_card}>
              <FlexCard
                img={ITStaffGetCard1}
                title={"EXPERTISE OF THE BEST PROFESSIONALS"}
                text={"You get access to a distinct set of skills that will be helpful to your project."}
              />
              <FlexCard
                img={ITStaffGetCard2}
                title={"ON-DEMAND SCALING"}
                text={"We can scale up and down the number of developers during the cooperation on your demand."}
              />
            </div>
            <div className={styles.card3_wrapper_card}>
              <FlexCard
                img={ITStaffGetCard3}
                title={"ATTENTION TO DETAILS"}
                text={"Whether your project development is open-ended or has strict deadlines, we can build the perfect team for you depending on your needs"}
              />
              <FlexCard
                img={ITStaffGetCard4}
                title={"IT’S LIKE HAVING AN IN-HOUSE TEAM"}
                text={"Our specialists are ready to establish development processes for your in-house team or adhere to the existing ones."}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container4}>
        <DiscussProject />
      </section>

      <section className={styles.container5}>
        <div className="globalContainer">
          <Title title={"IT Staff Augmented Teams"} />
          <p className={styles.title5_text}>Our deep talent pool to support virtually any tech stack means we can serve up that one key professional that will complete your team, or we can be your team.</p>
          <div className={styles.card5_wrapper}>
            <div className={styles.card5_wrapper_card}>
              <SoftwareCard
                clas={false}
                img={ITStaffTeamCard1}
                title={"WEB DEVELOPERS"}
                subtitle={"Staff augmentation with developers that have solid experience building web apps using modern frameworks, high-level programming languages, and other tools. Our talent pool is perfectly able to complete your team. "}
              />
              <SoftwareCard
                clas={false}
                img={ITStaffTeamCard2}
                title={"WEB DEVELOPERS"}
                subtitle={"Staff augmentation with developers that have solid experience building web apps using modern frameworks, high-level programming languages, and other tools. Our talent pool is perfectly able to complete your team. "}
              />
            </div>
            <div className={styles.card5_wrapper_card}>
              <SoftwareCard
                clas={false}
                img={ITStaffTeamCard3}
                title={"WEB DEVELOPERS"}
                subtitle={"Staff augmentation with developers that have solid experience building web apps using modern frameworks, high-level programming languages, and other tools. Our talent pool is perfectly able to complete your team. "}
              />
              <SoftwareCard
                clas={false}
                img={ITStaffTeamCard4}
                title={"WEB DEVELOPERS"}
                subtitle={"Staff augmentation with developers that have solid experience building web apps using modern frameworks, high-level programming languages, and other tools. Our talent pool is perfectly able to complete your team. "}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container6}>
        <div className="globalContainer">
          <Title title={"Staff Augmentation Terms"} />
          <div className={styles.texts}>
            <p className={styles.texts__text}>Our deep talent pool to support virtually any tech stack means we can serve up that one key professional that will complete</p>
            <p className={styles.texts__text}>your team, or we can be your team.</p>
          </div>
          <div className={styles.card6_wrapper}>
            <SoftwareCard
              clas={false}
              img={ITStaffTermsCard1}
              title={"Short-term period (1 mth+ )"}
              subtitle={"Team augmentation with IT experts for a limited scope of work that should be done urgently"}
            />
            <hr />
            <SoftwareCard
              clas={false}
              img={ITStaffTermsCard2}
              title={"Long-term period"}
              subtitle={"It implies long-lasting cooperation during the development lifecycle of your project."}
            />
          </div>
        </div>
      </section>

      <section className={styles.container7}>
        <h1 className={styles.title7}>DOWNLOAD COMPANY'S PROFILE</h1>
      </section>

      <section className={styles.container8}>
        <div className="globalContainer">
          <Title title={"How Does It Work?"} />
          <div className={styles.uxProcessBox}>
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
            </span>
          </div>
        </div>
      </section>

      <section className={styles.container9}>
        <div className="globalContainer">
          <Title title={"Our Happy Clients"} />
          <BigSwiper obj={bigSwiper} />
        </div>
      </section>

      <div>
        <ProjectAnalysis />
      </div>
    </>
  )
}

export default ITStaff;
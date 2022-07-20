import React from 'react';
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb';
import BigSwiper from '../../../../components/Swipers/BigSwiper/BigSwiper';
import Title from '../../../../components/Title/Title'
import ComponentCardd from './_components/Cards/Cardd';

import PaulChun from '../../../../assets/images/paulchun.jpg';
import Andrey from '../../../../assets/images/andreyKubka.jpg';
import Ekaterina from '../../../../assets/images/ekaterina.jpg';
import Michael from '../../../../assets/images/michael.jpg';
import Damian from '../../../../assets/images/damian.jpg';
import Yuriy from '../../../../assets/images/yuriy.jpg';
import ProjectAnalysis from '../../../../components/ProjectAnalysis/ProjectAnalysis'

import styles from './AddTechMarketing.module.scss';

const AddTechMarketing = () => {
  const data = [
    {
      label: "Expertise & Industries",
      link: "/"
    },
    {
      label: "Sales & Marketing Automation",
      link: ""
    },
  ]

  const obj = [
    {
      img: PaulChun,
      name: "Paul S. Chun",
      position: "Business Car",
      job: "General Director",
      title: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose SumatoSoft. We are pleased to mention that the work is done to the full extent, on time and on a high quality level. We recommend SumatoSoft as a reliable partner in the sphere of development and implementation of complex business solutions."
    },
    {
      img: Andrey,
      name: "Andrey Kubka",
      position: "Mediatron",
      job: "Product Technology Manager",
      title: "SumatoSoft team not only knew well how to build a partnership-based working process, but also offered sensible suggestions and advice helping us to reach the long-term business goals.We are completely satisfied with the results of our cooperation and will be happy to recommend SumatoSoft as a reliable and competent partner for development of web-based solutions"
    },
    {
      img: Ekaterina,
      name: "Ekaterina Bromberg",
      position: "MyMediAds.com",
      job: "Co-Founder",
      title: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the SumatoSoft team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work."
    },
    {
      img: Michael,
      name: "Michael Karbushev",
      position: "Evolv",
      job: "Senior Director of Engineering",
      title: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with."
    },
    {
      img: Damian,
      name: "Damian Gevertz",
      position: "Widgety",
      job: "Founder & CEO",
      title: "We tried another company that one of our partners had used but they didn’t work out. I feel that SumatoSoft does a better investigation of what we’re asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us."
    },
    {
      img: Yuriy,
      name: "Yuriy Semenchuk",
      position: "Business Car",
      job: "General Director",
      title: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose SumatoSoft. We are pleased to mention that the work is done to the full extent, on time and on a high quality level. We recommend SumatoSoft as a reliable partner in the sphere of development and implementation of complex business solutions."
    },
  ]
  return (

    <>
      <section className={styles.container}>
        <div className='globalContainer'>
          <BreadCrumb menu={data} />

          <div className={styles.titles}>
            <h1 className={styles.titles__title}>Ad Tech and Marketing Software Development Services</h1>
            <p className={styles.titles__text}>Ad Tech software opens new ways for user acquisition, an increase of user engagement, interaction and behavior analytics. Advertising technology experienced huge growth in 2020, the whole ecosystem of sales and advertising is becoming stronger, more flexible, effective, and transparent.</p>
            <ul className={styles.bottom}>
              <li className={styles.bottom__text}>CRM Software</li>
              <li className={styles.bottom__text}>Email Marketing</li>
              <li className={styles.bottom__text}>Marketing Automation</li>
              <li className={styles.bottom__text}>Social Media Marketing</li>
              <li className={styles.bottom__text}>Sales & Marketing Analytics</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='globalContainer'>
        
        <Title color={"#000"} title={"Reach Your Goals With AdTech Solutions"} />
        <div className={styles.texts}>
          <p className={styles.text}>The opportunities that custom marketing software opens to businesses are endless. First of all, we help companies</p>
          <p className={styles.text}> to optimize their sales and marketing strategy and set and reach new business goals.</p>
        </div>

        <ComponentCardd />
        <Title title={"Our Happy Clients"} />
        <BigSwiper obj={obj} />

        <div className={styles.btn__wrapper}>
          <button className={styles.all_btn}>View all testimonials
            <i id={styles.icon} class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>

      </section>

      <section className={styles.footer_top}>
        <ProjectAnalysis />
      </section>
    </>

  )
}

export default AddTechMarketing;
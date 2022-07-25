import React from 'react';
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb';
import Title from '../../../../components/Title/Title';
import ComponentCardd from './_components/Cards/Cardd';
import CustomSoft from './_components/CustomSoft/CustomSoft';

import PaulChun from '../../../../assets/images/paulchun.jpg';
import Andrey from '../../../../assets/images/andreyKubka.jpg';
import Ekaterina from '../../../../assets/images/ekaterina.jpg';
import Michael from '../../../../assets/images/michael.jpg';
import Damian from '../../../../assets/images/damian.jpg';
import Yuriy from '../../../../assets/images/yuriy.jpg';

import styles from './AddTechLearning.module.scss';
import BigSwiper from '../../../../components/Swipers/BigSwiper/BigSwiper';
import ProjectAnalysis from '../../../../components/ProjectAnalysis/ProjectAnalysis';
import DiscussProject from '../../../../components/DiscussProject/DiscussProject';

const AddTechLearning = () => {
  const data = [
    {
      label: "Expertise & Industries",
      link: "/"
    },
    {
      label: "Education & eLearning",
      link: "/"
    }
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
            <h1 className={styles.titles__title}>Engage Your Students Online with Custom Educational Software</h1>
            <p className={styles.titles__text}>The world of eLearning software brings innovation to every aspect of the educational process allowing teachers around the world to make it flexible, engaging and efficient.Our custom eLearning solutions let students achieve their goals and complete their training remotely, in a timely and effective manner.</p>
            <ul className={styles.bottom}>
              <li className={styles.bottom__text}>Online courses software</li>
              <li className={styles.bottom__text}>Learning management applications</li>
              <li className={styles.bottom__text}>Learning gamification solutions</li>
              <li className={styles.bottom__text}>Educational portals</li>
              <li className={styles.bottom__text}>Management and Administration Software</li>
              <li className={styles.bottom__text}>Assessment and Evaluation Software</li>
            </ul>
          </div>
          <div className={styles.input_card}>
            <DiscussProject />
          </div>
        </div>
      </section>

      <section>
        <div className='globalContainer'>
          <div style={{ marginTop: "130px" }}>
            <Title color={"#000"} title={"ELearning Software We Develop"} />
          </div>
          <div className={styles.texts}>
            <p className={styles.text}>Being an eLearning software development company, we praise innovations in the teaching process. Our custom-made</p>
            <p className={styles.text}>education software lets learners get away from the routine of traditional educational methods and provide teachers</p>
            <p className={styles.text}>with new possibilities to stimulate students’ imagination and a genuine will to learn. Like never before, education has</p>
            <p className={styles.text}>become convenient, effective and cost-effective.</p>
          </div>
          <ComponentCardd />
          <Title title={"Custom ELearning Software Development Benefits"} />
          <div className={styles.texts}>
            <p className={styles.text}>No matter if you represent a private business, an educational or governmental institution, custom education software</p>
            <p className={styles.text}>will greatly improve the performance of your organization. We develop software to automate educational processes, as</p>
            <p className={styles.text}>well as to manage, analyze, and visualize data for better student academic performance and educational process</p>
            <p className={styles.text}>management.</p>
          </div>
          <CustomSoft />
          <div style={{marginBottom: "100px"}}>
            <BigSwiper obj={obj} />
          </div>
        </div>
      </section>
      <section>
        <ProjectAnalysis />
      </section>
    </>
  )
}

export default AddTechLearning;
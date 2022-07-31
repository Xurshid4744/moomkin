import React from 'react';
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb';
import SoftwareCard from '../../../../components/Cards/SoftwareCard/SoftwareCard';
import Title from '../../../../components/Title/Title';
import FlexCard from '../../../../components/Cards/FlexCard/FlexCard';

import Blockchain1CardImg1 from '../../../../assets/images/blockcahain1cardImg1.svg';
import Blockchain1CardImg2 from '../../../../assets/images/blockcahain1cardImg2.svg';
import Blockchain1CardImg3 from '../../../../assets/images/blockcahain1cardImg3.svg';
import Blockchain1CardImg4 from '../../../../assets/images/blockcahain1cardImg4.svg';
import Blockchain1CardImg5 from '../../../../assets/images/blockcahain1cardImg5.svg';
import Blockchain1CardImg6 from '../../../../assets/images/blockcahain1cardImg6.svg';

import Blockchain2CardImg1 from '../../../../assets/images/blockcahain2cardImg1.svg';
import Blockchain2CardImg2 from '../../../../assets/images/blockcahain2cardImg2.svg';
import Blockchain2CardImg3 from '../../../../assets/images/blockcahain2cardImg3.svg';
import Blockchain2CardImg4 from '../../../../assets/images/blockcahain2cardImg4.svg';

import blockcahain3cardImg1 from '../../../../assets/images/blockcahain3cardImg1.svg';
import blockcahain3cardImg2 from '../../../../assets/images/blockcahain3cardImg2.svg';
import blockcahain3cardImg3 from '../../../../assets/images/blockcahain3cardImg3.svg';
import blockcahain3cardImg4 from '../../../../assets/images/blockcahain3cardImg4.svg';
import blockcahain3cardImg5 from '../../../../assets/images/blockcahain3cardImg5.svg';
import blockcahain3cardImg6 from '../../../../assets/images/blockcahain3cardImg6.svg';
import blockcahain3cardImg7 from '../../../../assets/images/blockcahain3cardImg7.svg';


import blockcahain4cardImg1 from '../../../../assets/images/blockcahain4cardImg1.svg';
import blockcahain4cardImg2 from '../../../../assets/images/blockcahain4cardImg2.svg';
import blockcahain4cardImg3 from '../../../../assets/images/blockcahain4cardImg3.svg';
import blockcahain4cardImg4 from '../../../../assets/images/blockcahain4cardImg4.svg';
import blockcahain4cardImg5 from '../../../../assets/images/blockcahain4cardImg5.svg';
import blockcahain4cardImg6 from '../../../../assets/images/blockcahain4cardImg6.svg';
import blockcahain4cardImg7 from '../../../../assets/images/blockcahain4cardImg7.svg';
import blockcahain4cardImg8 from '../../../../assets/images/blockcahain4cardImg8.svg';
import blockcahain4cardImg9 from '../../../../assets/images/blockcahain4cardImg9.svg';
import blockcahain4cardImg10 from '../../../../assets/images/blockcahain4cardImg10.svg';

import blockcahain5cardImg1 from '../../../../assets/images/blockcahain5cardImg1.svg';
import blockcahain5cardImg2 from '../../../../assets/images/blockcahain5cardImg2.svg';
import blockcahain5cardImg3 from '../../../../assets/images/blockcahain5cardImg3.svg';
import blockcahain5cardImg4 from '../../../../assets/images/blockcahain5cardImg4.svg';
import blockcahain5cardImg5 from '../../../../assets/images/blockcahain5cardImg5.svg';

import blockcahain6cardImg1 from '../../../../assets/images/blockcahain6cardImg1.svg';
import blockcahain6cardImg2 from '../../../../assets/images/blockcahain6cardImg2.svg';
import blockcahain6cardImg3 from '../../../../assets/images/blockcahain6cardImg3.svg';
import blockcahain6cardImg4 from '../../../../assets/images/blockcahain6cardImg4.svg';
import blockcahain6cardImg5 from '../../../../assets/images/blockcahain6cardImg5.svg';
import blockcahain6cardImg6 from '../../../../assets/images/blockcahain6cardImg6.svg';
import blockcahain6cardImg7 from '../../../../assets/images/blockcahain6cardImg7.svg';
import blockcahain6cardImg8 from '../../../../assets/images/blockcahain6cardImg8.svg';
import blockcahain6cardImg9 from '../../../../assets/images/blockcahain6cardImg9.svg';

import recenSoftwareImg1 from '../../../../assets/images/recenSoftwareImg1.png';
import recenSoftwareImg2 from '../../../../assets/images/recenSoftwareImg2.jpg';
import recenSoftwareImg3 from '../../../../assets/images/recenSoftwareImg3.jpg';
import recenSoftwareImg4 from '../../../../assets/images/recenSoftwareImg4.jpg';
import recenSoftwareImg5 from '../../../../assets/images/recenSoftwareImg5.jpg';
import recenSoftwareImg6 from '../../../../assets/images/recenSoftwareImg6.jpg';

import Yevgeniy from '../../../../assets/images/yevgeniy.jpeg';
import Alexander from '../../../../assets/images/alexander.jpg';
import Michael from '../../../../assets/images/Karbushev.jpg';
import Kubka from '../../../../assets/images/andreyKubka.jpg'
import Maria from '../../../../assets/images/maria.jpg';
import Yuriy from '../../../../assets/images/yuriy.jpg';





import styles from './Blockchain.module.scss';
import DiscussProject from '../../../../components/DiscussProject/DiscussProject';
import SmallSwiper from '../../../../components/Swipers/SmallSwiper/SmallSwiper';
import BigSwiper from '../../../../components/Swipers/BigSwiper/BigSwiper';
import ProjectAnalysis from '../../../../components/ProjectAnalysis/ProjectAnalysis';

const Blockchain = () => {

  const data = [
    {
      label: "Expertise & Industries",
      link: "/"
    },
    {
      label: "Blockchain",
      link: ""
    },
  ]

  const object = {
    img1: recenSoftwareImg1,
    img2: recenSoftwareImg2,
    img3: recenSoftwareImg3,
    img4: recenSoftwareImg4,
    img5: recenSoftwareImg5,
    img6: recenSoftwareImg6,
    title: "Recent Software We Made"
  }

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
          <div className={styles.top_titles}>
            <Title color={"white"} title={"Blockchain Development Services"} />
            <div className={styles.texts}>
              <p className={styles.text}>We help enterprises and startups to get the full advantage of blockchain solutions, improve business efficiency, security and</p>
              <p className={styles.text}>enable them to boost their businesses. Our blockchain development services can help a wide range of industries such as</p>
              <p className={styles.text}>retail, finance, governance and healthcare.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container2}>
        <div className="globalContainer">
          <Title title={"Our Blockchain Development Services"} />
          <div className={styles.card1_wrapper}>
            <div className={styles.card1_wrapper_card}>
              <SoftwareCard
                hcolor={"black"}
                img={Blockchain1CardImg1}
                title={"SMART CONTRACTS"}
                subtitle={"We develop, test and deploy tailor-made smart contracts with unique business logic that enable you to perform credible transactions."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={Blockchain1CardImg2}
                title={"DECENTRALIZED APP DEVELOPMENT"}
                subtitle={"We build high-end DApps that combine a number of interrelated smart contracts that share common logic and frontend."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={Blockchain1CardImg3}
                title={"ICO SOLUTIONS"}
                subtitle={"We provide you with our professional expertise thus enabling you to launch a successful crowdfunding campaign."}
              />
            </div>
            <div className={styles.card1_wrapper_card}>
              <SoftwareCard
                hcolor={"black"}
                img={Blockchain1CardImg4}
                title={"CUSTOM BLOCKCHAIN NETWORKS"}
                subtitle={"With our solid background and expertise in blockchain development, we deliver customized solutions that will refuel your business."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={Blockchain1CardImg5}
                title={"CRYPTO WALLET DEVELOPMENT"}
                subtitle={"We create crypto wallet DApps that support multiple cryptocurrencies and contain information about your wallet balance and more."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={Blockchain1CardImg6}
                title={"SECURITY BOOST"}
                subtitle={"We develop decentralized data storages to boost security, integrate data, ensure better access control and reduce risks."}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container3}>
        <div className="globalContainer">
          <Title title={"How We Can Help"} />
          <div className={styles.card2_wrapper}>
            <SoftwareCard
              img={Blockchain2CardImg1}
              title={"CUT THE COST OF BUSINESS TRANSACTIONS"}
              hcolor={"black"}
              clas={false}
            />
            <SoftwareCard
              img={Blockchain2CardImg2}
              title={"STREAMLINE YOUR FINANCIAL OPERATIONS"}
              hcolor={"black"}
              clas={false}
            />
            <SoftwareCard
              img={Blockchain2CardImg3}
              title={"SECURE YOUR FINANCIAL OPERATIONS"}
              hcolor={"black"}
              clas={false}
            />
            <SoftwareCard
              img={Blockchain2CardImg4}
              title={"REINFORCE YOUR ASSET MANAGEMENT"}
              hcolor={"black"}
              clas={false}
            />
          </div>
        </div>
      </section>

      <section className={styles.container4}>
        <div className="globalContainer">
          <Title title={"Our Blockchain Development Process"} />
          <div className={styles.card3_wrapper}>
            <SoftwareCard
              img={blockcahain3cardImg1}
              title={"1"}
              subtitle={"BLOCKCHAIN IDEATION"}
              clas={false}
            />
            <SoftwareCard
              img={blockcahain3cardImg2}
              title={"2"}
              subtitle={"TECHNOLOGY SELECTION"}
              clas={false}
            />
            <SoftwareCard
              img={blockcahain3cardImg3}
              title={"3"}
              subtitle={"DESIGN"}
              clas={false}
            />
            <SoftwareCard
              img={blockcahain3cardImg4}
              title={"4"}
              subtitle={"DEVELOPMENT"}
              clas={false}
            />
            <SoftwareCard
              img={blockcahain3cardImg5}
              title={"5"}
              subtitle={"QA AND TESTING"}
              clas={false}
            />
            <SoftwareCard
              img={blockcahain3cardImg6}
              title={"6"}
              subtitle={"DEPLOYMENT"}
              clas={false}
            />
            <SoftwareCard
              img={blockcahain3cardImg7}
              title={"7"}
              subtitle={"SUPPORT AND MAINTENANCE"}
              clas={false}
            />
          </div>
        </div>
      </section>

      <section className={styles.container5}>
        <DiscussProject />
      </section>

      <section className={styles.container6}>
        <div className="globalContainer">
          <Title color={"white"} title={"Technologies We Work With"} />
          <div className={styles.img66_wrapper}>
            <div className={styles.img6_wrapper}>
              <img src={blockcahain4cardImg1} alt="icon" />
              <img src={blockcahain4cardImg2} alt="icon" />
              <img src={blockcahain4cardImg3} alt="icon" />
              <img src={blockcahain4cardImg4} alt="icon" />
              <img src={blockcahain4cardImg5} alt="icon" />
              <img src={blockcahain4cardImg6} alt="icon" />
              <img src={blockcahain4cardImg7} alt="icon" />
            </div>
            <div className={styles.img6_wrapper2}>
              <img src={blockcahain4cardImg8} alt="icon" />
              <img src={blockcahain4cardImg9} alt="icon" />
              <img src={blockcahain4cardImg10} alt="icon" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container7}>
        <div className="globalContainer">
          <Title title={"What Makes Us Different"} />
          <div className={styles.card7_wrapper}>
            <SoftwareCard
              clas={false}
              img={blockcahain5cardImg1}
              title={"TECHNOLOGY EXPERTISE"}
              subtitle={"We have 10 years of experience in providing blockchain development services for different types of complex projects, such as ERP systems or Ecommerce Marketplace, including those which don’t have any ready product documentation."}
            />
            <SoftwareCard
              clas={false}
              img={blockcahain5cardImg2}
              title={"QUALITY CONTROL"}
              subtitle={"Our Senior Developers and CTO always participate in the Code Review process regardless of the project size to ensure code quality."}
            />
            <SoftwareCard
              clas={false}
              img={blockcahain5cardImg3}
              title={"FULL TRANSPARENCY"}
              subtitle={"We use Jira and Confluence as the main project management systems, providing our clients with the у possibility to track the development online in real time 24/7 without any hidden work and payments."}
            />
            <SoftwareCard
              clas={false}
              img={blockcahain5cardImg4}
              title={"AGILE APPROACH"}
              subtitle={"We follow best PM practices & processes like Agile methodology, Scrum, and Kanban. We provide blockchain development services with a strong focus on timely software delivery and close cooperation."}
            />
            <SoftwareCard
              clas={false}
              img={blockcahain5cardImg5}
              title={"TRUSTED"}
              subtitle={"Based on the most trusted review platforms: 5.00/5 Goodfirms.co 4.8/5 Clutch.co"}
            />
          </div>
        </div>
      </section>

      <section className={styles.container8}>
        <div className="globalContainer">
          <Title title={"Benefits Of Choosing SumatoSoft As The Blockchain Development Services Provider"} />
          <div className={styles.card8_wrapper}>
            <div className={styles.card8_wrapper_card}>
              <h1>BUILD ON</h1>
              <FlexCard
                img={blockcahain6cardImg1}
                title={"Proven workflows; Dedicated QA specialists"}
              />
              <FlexCard
                img={blockcahain6cardImg2}
                title={"Lessons learnt after 36000 hours of custom software development"}
              />
              <FlexCard
                img={blockcahain6cardImg3}
                title={"Openness to share knowledge and experience with your teams"}
              />
            </div>
            <div className={styles.card8_wrapper_card}>
              <h2>GO FASTER WITH</h2>
              <FlexCard
                img={blockcahain6cardImg4}
                title={"Proven workflows; Dedicated QA specialists"}
              />
              <FlexCard
                img={blockcahain6cardImg5}
                title={"Lessons learnt after 36000 hours of custom software development"}
              />
              <FlexCard
                img={blockcahain6cardImg6}
                title={"Openness to share knowledge and experience with your teams"}
              />
            </div>
            <div className={styles.card8_wrapper_card}>
              <h1>STAY IN CONTROL</h1>
              <FlexCard
                img={blockcahain6cardImg7}
                title={"Proven workflows; Dedicated QA specialists"}
              />
              <FlexCard
                img={blockcahain6cardImg8}
                title={"Lessons learnt after 36000 hours of custom software development"}
              />
              <FlexCard
                img={blockcahain6cardImg9}
                title={"Openness to share knowledge and experience with your teams"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container9}>
        <div className="globalContainer">
          <SmallSwiper obj={object} />
        </div>
      </section>

      <section className={styles.container10}>
        <div className="globalContainer">
          <Title title={"Our Happy Clients"} />
          <BigSwiper obj={bigSwiper} />
        </div>
      </section>

      <section className={styles.container11}>
        <div className="globalContainer">
          <Title title={"Frequently Asked Questions"} />

        </div>
      </section>

      <div>
        <ProjectAnalysis />
      </div>
    </>
  )
}

export default Blockchain;
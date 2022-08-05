import React, { useState } from 'react';
import SoftwareCard from '../../../components/Cards/SoftwareCard/SoftwareCard';
import SmallSwiper from '../../../components/Swipers/SmallSwiper/SmallSwiper';
import DiscussProject from '../../../components/DiscussProject/DiscussProject';
import BigSwiper from '../../../components/Swipers/BigSwiper/BigSwiper';
import FlexCard from '../../../components/Cards/FlexCard/FlexCard';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import Acardion from '../../../components/Acardion/Acardion';
import Title from '../../../components/Title/Title';

import TestCard1 from '../../../assets/images/TestCard1.svg';
import TestCard2 from '../../../assets/images/TestCard2.svg';
import TestCard3 from '../../../assets/images/TestCard3.svg';
import TestCard4 from '../../../assets/images/TestCard4.svg';
import TestCard5 from '../../../assets/images/TestCard5.svg';

import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import QAExcellent from '../../../assets/images/QAExcellent.svg'

import ManualImg1 from '../../../assets/images/ManualImg1.svg';
import ManualImg2 from '../../../assets/images/ManualImg2.svg';
import ManualImg3 from '../../../assets/images/ManualImg3.svg';

import AmanualCardImg1 from '../../../assets/images/AmanualCardImg1.svg';
import AmanualCardImg2 from '../../../assets/images/AmanualCardImg2.svg';
import AmanualCardImg3 from '../../../assets/images/AmanualCardImg3.svg';
import AmanualCardImg4 from '../../../assets/images/AmanualCardImg4.svg';

import AssuranceCard1 from '../../../assets/images/AssuranceCard1.svg';
import AssuranceCard2 from '../../../assets/images/AssuranceCard2.svg';
import AssuranceCard3 from '../../../assets/images/AssuranceCard3.svg';

import Yevgeniy from '../../../assets/images/yevgeniy.jpeg';
import Alexander from '../../../assets/images/alexander.jpg';
import Michael from '../../../assets/images/Karbushev.jpg';
import Kubka from '../../../assets/images/andreyKubka.jpg'
import Maria from '../../../assets/images/maria.jpg';
import Yuriy from '../../../assets/images/yuriy.jpg';

import PrinciplesCard1 from '../../../assets/images/PrinciplesCard1.svg';
import PrinciplesCard2 from '../../../assets/images/PrinciplesCard2.svg';
import PrinciplesCard3 from '../../../assets/images/PrinciplesCard3.svg';
import PrinciplesCard4 from '../../../assets/images/PrinciplesCard4.svg';

import Rewards1 from '../../../assets/images/Rewards1.svg';
import Rewards2 from '../../../assets/images/Rewards2.svg';
import Rewards3 from '../../../assets/images/Rewards22.svg';
import Rewards4 from '../../../assets/images/Rewards3.svg';
import Rewards5 from '../../../assets/images/Rewards4.svg';
import Rewards6 from '../../../assets/images/Rewards5.svg';
import recenSoftwareImg1 from '../../../assets/images/recenSoftwareImg1.png';
import recenSoftwareImg2 from '../../../assets/images/recenSoftwareImg2.jpg';
import recenSoftwareImg3 from '../../../assets/images/recenSoftwareImg3.jpg';
import recenSoftwareImg4 from '../../../assets/images/recenSoftwareImg4.jpg';
import recenSoftwareImg5 from '../../../assets/images/recenSoftwareImg5.jpg';
import recenSoftwareImg6 from '../../../assets/images/recenSoftwareImg6.jpg';



import QualityMainImg from '../../../assets/images/QualityMainImg.svg';
import styles from "./index.module.scss";
import ProjectAnalysis from '../../../components/ProjectAnalysis/ProjectAnalysis';

const TestingServices = () => {

  const data = [
    {
      label: "Services",
      link: "/services"
    },
    {
      label: "QA & Testing",
      link: "/services/quality-assurance"
    }
  ]

  const data2 = [
    {
      title: "FUNCTIONAL TESTING",
      text: "Put your app functionality under test to know if everything works right.",
      li1: "Integration Testing",
      li2: "Acceptance Testing",
      li3: "Security and Access Control Testing"
    },
    {
      title: "NON-FUNCTIONAL TESTING",
      text: "Find out how well your application works in various environments.",
      li1: "Performance and Load Testing",
      li2: "Usability Testing",
      li3: "Cross-platform Testing"
    },
    {
      title: "CHANGES TESTING",
      text: "Be sure the improvements won't affect the work of the previous version.",
      li1: "Regression Testing",
      li2: "Build Verification Testing",
      li3: "Sanity Testing"
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

  const object = {
    img1: recenSoftwareImg1,
    img2: recenSoftwareImg2,
    img3: recenSoftwareImg3,
    img4: recenSoftwareImg4,
    img5: recenSoftwareImg5,
    img6: recenSoftwareImg6,
    title: "Recent Software We Made"
  }

  const acardion = [
    {
      title: "What is quality assurance?",
      text: "Quality Assurance in software is a set of activities that focuses on preventing quality failure at every stage of software development. Quality control, in turn, is a part of quality assurance services. Its purpose is to check if the software quality meets pre-agreed quality requirements."
    },
    {
      title: "What type of QA do I need?",
      text: "Basic quality assurance services we recommend to every project are QA strategy development, acceptance testing, graphical user interface testing, and functional testing. Since there are more than 15 types of quality assurance and control activities, the exact choice of the types depends on the project requirements."
    },
    {
      title: "What are quality assurance standards?",
      text: "Quality assurance standards are sets of formal and informal guidelines aimed to ensure the software product meets its purposes and has few bugs. Companies that offer quality assurance services apply these guidelines in all development stages: from the discovery phase to store release. An example of an official standard is ISO 9000."
    },
     {
      title: "Why is SumatoSoft a top-quality provider of quality assurance services?",
      text: "SumatoSoft isn’t a self-proclaimed king of quality assurance services since the reliability of SumatoSoft as a top developer is recognized by analytic agencies like clutch and goodfirms. Our clients also remain satisfied with the quality assurance services we provide with a 4.8 rating on clutch and a 5 rating on goodfirms."
    },
  ]

  const [scrum, setSrum] = useState();

  return (
    <>
      <section className={styles.container1}>
        <div className="globalContainer">
          <BreadCrumb menu={data} />
          <div className={styles.titles_wrapper1}>
            <Title color={"white"} title={"Software Quality Assurance and Testing Services"} />
            <div className={styles.texts}>
              <p className={styles.texts__text}>Our deep talent pool to support virtually any tech stack means we can serve up that one key professional that will complete</p>
              <p className={styles.texts__text}>your team, or we can be your team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container2}>
        <div className="globalContainer">
          <Title title={"Benefits of Quality Assurance Services with SumatoSoft"} />
          <div className={styles.card2_wrapper}>
            <div className={styles.card2_wrapper_card}>
              <FlexCard
                clas={false}
                img={TestCard1}
                title={"QUALITY PROVEN WITH NUMBERS"}
                text={"We only release the software if it meets the specified percentage of acceptance criteria. The percentage is agreed upon with you in the quality assurance strategy."}
              />
              <FlexCard
                clas={false}
                img={TestCard2}
                title={"REDUCED FUTURE RISKS"}
                text={"Tested software comes without critical bugs and blockers that can negatively affect further software development and use."}
              />
            </div>

            <div className={styles.card2_wrapper_card}>
              <FlexCard
                clas={false}
                img={TestCard3}
                title={"WE WORK TRANSPARENTLY"}
                text={"We communicate weekly, run demos of the work done, provide several contact points, send timesheet reports every month even if you don’t request them, explain potential risks and help to handle them, advise on the decisions, and help to avoid unnecessary costs."}
              />
              <FlexCard
                clas={false}
                img={TestCard4}
                title={"98% CLIENT SATISFACTION RATE "}
                text={"This is the percent of our clients that are satisfied with the quality assurance services we provide."}
              />
            </div>

            <div className={styles.card2_wrapper_card_bottom}>
              <FlexCard
                clas={false}
                img={TestCard5}
                title={"70% SENIOR SPECIALISTS"}
                text={"SumatoSoft senior-level QA engineers make sure the app complies with domain best practices and our inner quality assurance guidelines. Better quality means happier users."}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container3}>
        <div className="globalContainer">
          <div className={styles.images} data-aos="flip-up">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
          </div>
        </div>
      </section>

      <section className={styles.container4}>
        <div className="globalContainer">
          <Title title={"Different Solutions Need Different Quality Assurance Services"} />
          <p className={styles.title4}>Our specialists have solid experience in each type of Quality Assurance (QA) services we provide.</p>
          <div className={styles.qa_excellentt}>
            <img src={QAExcellent} alt="img" />
          </div>

          <div className={styles.card4_wrapper}>
            {data2.map((item, key) => (
              <div className={styles.card4_wrapper_card} key={key}>
                <h2 className={styles.card4_title}>{item.title}</h2>
                <p className={styles.card4_text}>{item.text}</p>
                <ul className={styles.card4_ul}>
                  <li className={styles.card4_ul_li}>{item.li1}</li>
                  <li className={styles.card4_ul_li}>{item.li2}</li>
                  <li className={styles.card4_ul_li}>{item.li3}</li>
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className={styles.container5}>
        <div className="globalContainer">
          <Title title={"Quality Assurance Services & Testing"} />
          <div className={styles.texts}>
            <p className={styles.texts__text}>We start quality assurance with development of a QA strategy that contains up to 10 paragraphs.Two key paragraphs are a</p>
            <p className={styles.texts__text}>goal of testing and a testing approach.</p>

            <div className={styles.methodology}>
              <div
                className={!scrum ? styles.dotted : styles.solid}
                onClick={() => setSrum(true)}
              >
                MANUAL TESTING
              </div>
              <div
                className={scrum ? styles.dotted : styles.solid}
                onClick={() => setSrum(false)}
              >
                AUTOMATED TESTING
              </div>
            </div>

            {scrum ? (
              <section className={styles.scrumsec}>
                <h2 className={styles.p}>
                  QA specialists conduct tests and prepare error reports without the use of automation tools.
                </h2>
                <div className={styles.auto_wrapper}>
                  <Title title={"Why Run Manual Tests"} />

                  <div className={styles.auto_card_wrapper}>
                    <div className={styles.auto_card_wrapper_card}>
                      <FlexCard
                        img={AmanualCardImg1}
                        text={"Every project inevitably goes through manual testing. If there are no testers on the project, other specialists run manual tests. But testers do it better."}
                      />
                      <FlexCard
                        img={AmanualCardImg2}
                        text={"Mobile app stores only submit applications that work properly."}
                      />
                    </div>
                    <div className={styles.auto_card_wrapper_card}>
                      <FlexCard
                        img={AmanualCardImg3}
                        text={"Testers identify nonfunctional defects that negatively affect user experience and help fix them."}
                      />
                      <FlexCard
                        img={AmanualCardImg4}
                        text={"Testers check complex scenarios that can’t be tested automatically. "}
                      />
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className={styles.scrumsec}>
                <h2 className={`${styles.p} globalContainer`}>
                  QA specialists write scripts that automate test execution. Automation reduces the efforts and, therefore, the cost of testing.
                </h2>
                <div className={`${styles.manual_wrapper} `}>
                  <Title title={"Why Automate Tests"} />
                  <div className={styles.manual_wrapper_cards}>

                    <div className={styles.manual_wrapper_cards_card}>
                      <FlexCard
                        img={ManualImg1}
                        text={"The key objective of automation is the project cost reduction. If the return on investments is negative, automation brings few benefits"}
                      />
                      <FlexCard
                        img={ManualImg3}
                        text={"If a project needs regression tests and releases happen 2+ times a month"}
                      />
                    </div>
                    <div className={styles.manual_wrapper_cards_card2}>
                      <FlexCard
                        img={ManualImg2}
                        text={"If tests feature hundreds of routine actions like creating a hundred of new user"}
                      />
                    </div>

                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <section className={styles.container6}>
        <div className="globalContainer">
          <Title title={"Different Solutions Need Different Quality Assurance Services"} />
          <div className={styles.texts}>
            <p className={styles.texts__text}>Our specialists have solid experience in each type of Quality Assurance services.</p>
          </div>

          <div className={styles.quality_card_wrapper}>
            <div className={styles.quality_card_wrapper_card}>
              <SoftwareCard
                clas={false}
                img={AssuranceCard1}
                title={"FUNCTIONAL TESTING"}
                subtitle={"Put your app functionality under test to know if everything works right."}
              />
              <ul className={styles.quality_card_wrapper_card_ul}>
                <li>Integration Testing</li>
                <li>Acceptance Testing</li>
                <li>Security and Access Control Testing</li>
              </ul>
            </div>
            <div className={styles.quality_card_wrapper_card}>
              <SoftwareCard
                clas={false}
                img={AssuranceCard2}
                title={"NON-FUNCTIONAL TESTING"}
                subtitle={"Find out how well your application works in various environments."}
              />
              <ul className={styles.quality_card_wrapper_card_ul}>
                <li>Performance and Load Testing</li>
                <li>Usability Testing</li>
                <li>Cross-platform Testing</li>
              </ul>
            </div>
            <div className={styles.quality_card_wrapper_card}>
              <SoftwareCard
                clas={false}
                img={AssuranceCard3}
                title={"CHANGES TESTING"}
                subtitle={"Be sure the improvements won't affect the work of the previous version."}
              />
              <ul className={styles.quality_card_wrapper_card_ul}>
                <li>Regression Testing</li>
                <li>Build Verification Testing</li>
                <li>Sanity Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container7}>
        <div className="globalContainer">
          <Title title={"Our Happy Clients"} />
          <BigSwiper obj={bigSwiper} />
        </div>
      </section>

      <section className={styles.container8}>
        <div className={styles.disc}>
          <DiscussProject />
        </div>

        <div>
          <Title color={"white"} title={"Quality Assurance As Part Of Agile Development"} />
          <div className={styles.texts}>
            <p className={styles.texts__text}>Quality Assurance and Testing are an integral part of agile software development, along with the</p>
            <p className={styles.texts__text}>coding. QA specialists help developers to specify executable requirements for the ongoing sprint that</p>
            <p className={styles.texts__text}>guide coding. Testing and coding are done incrementally and iteratively, building up each feature until</p>
            <p className={styles.texts__text}>it provides enough value to release to production.</p>
          </div>
          <div className={styles.main_img} style={{ textAlign: "center" }}>
            <img src={QualityMainImg} alt="img" />
          </div>
        </div>
      </section>

      <section className={styles.container9}>
        <div className="globalContainer">
          <Title title={"Principles Of Our Quality Assurance Approach"} />
          <div className={styles.card9_wrapper}>
            <SoftwareCard
              hcolor={"#000"}
              img={PrinciplesCard1}
              title={"BEST PRACTICES USE"}
              subtitle={"to apply the best testing practices in a way to meet customer requirements."}
            />
            <SoftwareCard
              hcolor={"#000"}
              img={PrinciplesCard2}
              title={"IMPROVED INTERNAL PROCESSES"}
              subtitle={"to ensure that the best development services are provided."}
            />
            <SoftwareCard
              hcolor={"#000"}
              img={PrinciplesCard3}
              title={"USER-ORIENTED APPROACH"}
              subtitle={"to analyze the development process and solution from the user's point of view."}
            />
            <SoftwareCard
              hcolor={"#000"}
              img={PrinciplesCard4}
              title={"EXCEL QA PROCESSES"}
              subtitle={"to control and constantly improve Quality Assurance and testing processes."}
            />
          </div>
        </div>
      </section>

      <section className={styles.container10}>
        <div className="globalContainer">
          <Title title={"Rewards & Recognitions"} />
          <div className={styles.texts}>
            <p className={styles.texts__text}>SumatoSoft has been recognized by the leading analytics agencies working with the best software development companies</p>
            <p className={styles.texts__text}>from all over the world. Our values and partners help us to provide the best services in the field.</p>
          </div>
          <div className={styles.card10_wrapper}>
            <div>
              <img src={Rewards1} alt="img" />
              <p>Recognized by
                Clutch.co</p>
            </div>
            <div>
              <img src={Rewards2} alt="img" />
              <p>AMAZON
                Consulting Partner</p>
            </div>
            <div>
              <img src={Rewards3} alt="img" />
              <p>Recognized by
                GoodFirms.co</p>
            </div>
            <div>
              <img src={Rewards4} alt="img" />
              <p>Recognized by
                TopDigital.Agency</p>
            </div>
            <div>
              <img src={Rewards5} alt="img" />
              <p>Recognized by
                TechReviewer.co</p>
            </div>
            <div>
              <img src={Rewards6} alt="img" />
              <p>Hign Tech Park
                Resident</p>
            </div>
          </div>
          <SmallSwiper obj={object}/>
        </div>
      </section>

      <div>
        <ProjectAnalysis />
      </div>

      <section className={`${styles.container11} globalContainer`}>
        <div className={styles.acardion_wrapper}>
          <Acardion data={acardion} />
        </div>
      </section>
    </>
  )
}

export default TestingServices;
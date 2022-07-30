import React from 'react';
import ProjectAnalysis from '../../../../components/ProjectAnalysis/ProjectAnalysis';
import SoftwareCard from '../../../../components/Cards/SoftwareCard/SoftwareCard';
import DiscussProject from '../../../../components/DiscussProject/DiscussProject';
import SmallSwiper from '../../../../components/Swipers/SmallSwiper/SmallSwiper';
import BigSwiper from '../../../../components/Swipers/BigSwiper/BigSwiper';
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb';
import Title from '../../../../components/Title/Title';
import styles from './LogisticsTrans.module.scss';

import LogisticImg1 from '../../../../assets/images/logisticImg1.svg';
import LogisticImg2 from '../../../../assets/images/logisticImg2.svg';
import LogisticImg3 from '../../../../assets/images/logisticImg3.svg';
import LogisticImg4 from '../../../../assets/images/logisticImg4.svg';
import LogisticImg5 from '../../../../assets/images/logisticImg5.svg';
import LogisticImg6 from '../../../../assets/images/logisticImg6.svg';
import LogisticImg7 from '../../../../assets/images/logisticImg7.svg';
import LogisticImg8 from '../../../../assets/images/logisticImg8.svg';
import LogisticImg9 from '../../../../assets/images/logisticImg9.svg';

import Yevgeniy from '../../../../assets/images/yevgeniy.jpeg';
import Alexander from '../../../../assets/images/alexander.jpg';
import Michael from '../../../../assets/images/Karbushev.jpg';
import Kubka from '../../../../assets/images/andreyKubka.jpg'
import Maria from '../../../../assets/images/maria.jpg';
import Yuriy from '../../../../assets/images/yuriy.jpg';
import LogisticMainImg from '../../../../assets/images/logisticMainImg.jpg'

import recenSoftwareImg1 from '../../../../assets/images/recenSoftwareImg1.png';
import recenSoftwareImg2 from '../../../../assets/images/recenSoftwareImg2.jpg';
import recenSoftwareImg3 from '../../../../assets/images/recenSoftwareImg3.jpg';
import recenSoftwareImg4 from '../../../../assets/images/recenSoftwareImg4.jpg';
import recenSoftwareImg5 from '../../../../assets/images/recenSoftwareImg5.jpg';
import recenSoftwareImg6 from '../../../../assets/images/recenSoftwareImg6.jpg';

import True from '../../../../assets/icons/true.svg';

import AdvanceImg1 from '../../../../assets/images/advanceImg1.svg';
import AdvanceImg2 from '../../../../assets/images/advanceImg2.svg';
import AdvanceImg3 from '../../../../assets/images/advanceImg3.svg';

import LogicBottomImg1 from '../../../../assets/images/logicBottomImg1.svg';
import LogicBottomImg2 from '../../../../assets/images/logicBottomImg2.svg';
import LogicBottomImg3 from '../../../../assets/images/logicBottomImg3.svg';
import LogicBottomImg4 from '../../../../assets/images/logicBottomImg4.svg';
import LogicBottomImg5 from '../../../../assets/images/logicBottomImg5.svg';
import LogicBottomImg6 from '../../../../assets/images/logicBottomImg6.svg';
import LogicBottomImg7 from '../../../../assets/images/logicBottomImg7.svg';
import LogicBottomImg8 from '../../../../assets/images/logicBottomImg8.svg';
import LogicBottomImg9 from '../../../../assets/images/logicBottomImg9.svg';






const LogisticsTrans = () => {

  const data = [
    {
      label: "Expertise & Industries",
      link: "/"
    },
    {
      label: "Ecommerce Application Development",
      link: "/"
    }
  ]
  const softCardData = [
    {
      img: LogisticImg1,
      title: "Freight Management Software"
    },
    {
      img: LogisticImg2,
      title: "Transportation Management Software"
    },
    {
      img: LogisticImg3,
      title: "Fleet Management Software"
    },
    {
      img: LogisticImg4,
      title: "Supply Chain Management and Security"
    },
    {
      img: LogisticImg5,
      title: "Transit Time Optimization and Management"
    },
    {
      img: LogisticImg6,
      title: "Product Integrity and Damage Control"
    },
    {
      img: LogisticImg7,
      title: "Route Optimization"
    },
    {
      img: LogisticImg8,
      title: "Fuel Price Volatility"
    },
    {
      img: LogisticImg9,
      title: "Driver Activity Monitoring"
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
  return (
    <>
      <section className={styles.container1}>
        <div className="globalContainer">
          <BreadCrumb menu={data} />
          <div className={styles.titles}>
            <h1 className={styles.titles__title}>Logistics & Transportation Software Development</h1>
            <p className={styles.titles__text}>Let’s streamline and optimize logistics business processes, improve transportation load and route planning, eliminate shipment issues, and reduce costs with custom logistics and transportation software tailored to the way you move things around the world.</p>
            <p className={styles.titles__text}>During custom eCommerce website development, we use brand-new ways to optimize customer service and order processes.</p>
            <ul className={styles.bottom}>
              <li className={styles.bottom__text}>Procurement & Sourcing Management</li>
              <li className={styles.bottom__text}>Warehouse Management</li>
              <li className={styles.bottom__text}>Supplier Relationship Management</li>
              <li className={styles.bottom__text}>Transportation Management</li>
              <li className={styles.bottom__text}>Inventory Management</li>
              <li className={styles.bottom__text}>Delivery Planning & Management</li>
              <li className={styles.bottom__text}>Order Processing</li>
              <li className={styles.bottom__text}>Issuance of Documents</li>
              <li className={styles.bottom__text}>Customer Management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.container2}>
        <div className="globalContainer">
          <Title title={"Custom Logistics Software We Make"} />
          <div className={styles.texts}>
            <p className={styles.text}>Logistics & Transportation companies have many branches and subdivisions with their peculiar process and zones of</p>
            <p className={styles.text}>responsibility. However, no matter if you are into a freight forwarding business or manage a warehouse, or looking for</p>
            <p className={styles.text}>fleet management software, with the help of logistics software development you can optimize the work and bring your</p>
            <p className={styles.text}>business to a new level.</p>
          </div>

          <div className={styles.softCardWrapper}>
            {softCardData.map(item => (
              <div className={styles.border}>
                <SoftwareCard
                  hcolor={"black"}
                  img={item.img}
                  title={item.title}
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className={styles.container3}>
        <div className={`${styles.con_wrapper} globalContainer`}>
          <div className={styles.titles_wrapper}>
            <h1 className={styles.titles_wrapper__title}>Transportation And Logistics Software Benefits For Business</h1>
            <div className={styles.titles_wrapper_line}></div>
            <p className={styles.titles_wrapper__text}>IT in general and software development for logistics in particular has changed lots of businesses around the world, and the process keeps going. Don’t miss a chance to bring your logistics company on the edge of technological progress and beat your competitors. </p>

            <div className={styles.titles_wrapper2}>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Complete orders efficiently, on time, at the lowest cost with modern logistics software;
              </p>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Increase profits and margins;
              </p>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Take more orders and increase throughput with the same human resources;
              </p>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Automate your processes and reduce paperwork;
              </p>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Make the business more predictable;
              </p>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Evaluate the performance of people, processes, contractors;
              </p>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Predict future demand using predictive analysis features;
              </p>
              <p className={styles.titles_wrapper2__text}>
                <img src={True} alt="icon" />
                Take on-time decisions thanks to real-time data.
              </p>
            </div>
          </div>
          <div className={styles.img_wrapper}>
            <img className={styles.img_truck} src={LogisticMainImg} alt="icon" />
          </div>
        </div>
      </section>

      <section className={styles.container4}>
        <DiscussProject />
      </section>

      <section className={styles.container5}>
        <div className="globalContainer">
          <Title title={"Our Happy Clients"} />
          <BigSwiper obj={bigSwiper} />

          <div>
            <Title title={"The Way We Develop Logistics Software"} />
          </div>

          <SmallSwiper obj={object} />
        </div>
      </section>

      <section className={styles.container6}>
        <div className="globalContainer">
          <Title title={"Advance Your Logistics Software"} />

          <div className={styles.advance_card_wrapper}>
            <div className={styles.advance_card_wrapper__card}>
              <img src={AdvanceImg1} alt="icon" />
              <h2 className={styles.advance_card_wrapper__card__title}>INTERNET OF THINGS</h2>
              <p className={styles.advance_card_wrapper__card__text}>The use of IoT technology is growing rapidly in transportation and logistics software. The Internet of Things applications can be helpful in fleet management, vehicle tracking, route optimization, inventory management, and planning. We encourage you to use modern technologies and keep ahead of other logistics companies!</p>
            </div>
            <div className={styles.advance_card_wrapper__card}>
              <img src={AdvanceImg2} alt="icon" />
              <h2 className={styles.advance_card_wrapper__card__title}>ARTIFICIAL INTELLIGENCE</h2>
              <p className={styles.advance_card_wrapper__card__text}>Use the power of artificial intelligence to create applications that can predict demand, modify orders, and re-route in-transit goods to warehouses where needed. With AI-powered applications warehousing, predictive analytics, smart reporting and intelligent forecasting will evolve to the next level.</p>
            </div>
            <div className={styles.advance_card_wrapper__card}>
              <img src={AdvanceImg3} alt="icon" />
              <h2 className={styles.advance_card_wrapper__card__title}>BIG DATA & MACHINE LEARNING</h2>
              <p className={styles.advance_card_wrapper__card__text}>Machine learning technologies are becoming an integral part of logistics software development services. They provide a comprehensive overview of the supply chain and have an impact on processes such as purchasing, delivery, inventory management, maintenance, scheduling optimization, and accident prediction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container7}>
        <div className="globalContainer">
          <Title title={"Why SumatoSoft Logistics Software Development Services?"} />
          <div className={styles.texts}>
            <p className={styles.text}>SumatoSoft is a web development company that develops top-notch transportation and</p>
            <p className={styles.text}>logistics software. As one of the top logistics software companies, we carry 3 values: </p>
          </div>
          <div className={styles.logicBottomCards}>
            <div  className={styles.logicBottomCards__card}>
              <h2>EXPERIENCE</h2>
              <SoftwareCard
                img={LogicBottomImg1}
                subtitle={"Using the best software development practices"}
                clas={false}
              />
              <SoftwareCard
                img={LogicBottomImg2}
                subtitle={"Experienced after 36K+ hours of custom logistics software development"}
                clas={false}
              />
              <SoftwareCard
                img={LogicBottomImg3}
                subtitle={"Open to sharing knowledge and experience"}
                clas={false}
              />
            </div>
            <div  className={styles.logicBottomCards__card}>
              <h2>SPEED</h2>
              <SoftwareCard
                img={LogicBottomImg4}
                subtitle={"Agile (Scrum, Kanban) methodology"}
                clas={false}
              />
              <SoftwareCard
                img={LogicBottomImg5}
                subtitle={"100% transparency of the process"}
                clas={false}
              />
              <SoftwareCard
                img={LogicBottomImg6}
                subtitle={"Dedicated Technical PO / PM / BA"}
                clas={false}
              />
            </div>
            <div  className={styles.logicBottomCards__card}>
              <h2>CONTROL</h2>
              <SoftwareCard
                img={LogicBottomImg7}
                subtitle={"Clear and detailed time & cost estimates"}
                clas={false}
              />
              <SoftwareCard
                img={LogicBottomImg8}
                subtitle={"Sprint / monthly reports, custom reports"}
                clas={false}
              />
              <SoftwareCard
                img={LogicBottomImg9}
                subtitle={"Regular communications: calls, emails, chats, personal meetings"}
                clas={false}
              />
            </div>
          </div>
        </div>
      </section>

      <div>
        <ProjectAnalysis />
      </div>
    </>
  )
}

export default LogisticsTrans;
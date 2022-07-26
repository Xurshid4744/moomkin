import React from 'react';
import SoftwareCard from '../../../../components/Cards/SoftwareCard/SoftwareCard';
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
import LogisticMainImg from '../../../../assets/images/logisticMainImg.jpg'

import True from '../../../../assets/icons/true.svg';



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
        <div className={`${styles.con_wrapper} globalContainer` }>
          <div className={styles.titles_wrapper}>
            <h1>Transportation And Logistics Software Benefits For Business</h1>
            <div></div>
            <p>IT in general and software development for logistics in particular has changed lots of businesses around the world, and the process keeps going. Don’t miss a chance to bring your logistics company on the edge of technological progress and beat your competitors. </p>

            <div>
              <p>
                <img src={True} alt="icon" />
                Complete orders efficiently, on time, at the lowest cost with modern logistics software;
              </p>
              <p>
                <img src={True} alt="icon" />
                Increase profits and margins;
              </p>
              <p>
                <img src={True} alt="icon" />
                Take more orders and increase throughput with the same human resources;
              </p>
              <p>
                <img src={True} alt="icon" />
                Automate your processes and reduce paperwork;
              </p>
              <p>
                <img src={True} alt="icon" />
                Make the business more predictable;
              </p>
              <p>
                <img src={True} alt="icon" />
                Evaluate the performance of people, processes, contractors;
              </p>
              <p>
                <img src={True} alt="icon" />
                Predict future demand using predictive analysis features;
              </p>
              <p>
                <img src={True} alt="icon" />
                Take on-time decisions thanks to real-time data.
              </p>
            </div>
          </div>
          <div className={styles.img_wrapper}>
            <img src={LogisticMainImg} alt="icon" />
          </div>
        </div>
      </section>
    </>
  )
}

export default LogisticsTrans;
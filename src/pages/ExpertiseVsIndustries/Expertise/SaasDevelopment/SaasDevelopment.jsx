import React from "react";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import HeadLine from "../../../../components/HeadLine/HeadLine";
import styles from "./SaasDevelopment.module.scss";

const SaasDevelopment = () => {
  const menu = [
    {
      link: "",
      label: "Expertise & Industries",
    },
    {
      link: "",
      label: "SaaS Application Development Services",
    },
  ];

  const headLine = {
    title: "SaaS Application Development Services",
  };
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <div className={styles.headLine}>
            <HeadLine data={headLine} hidden={true} sizeTitle="45px">
              <p>
                We help you build reliable, efficient solutions or upgrade your
                on-premise product without making any sacrifices in your
                time-to-market.
              </p>
              <ul>
                <li>SaaS Product Conceptualisation</li>
                <li>Strategy Development</li>
                <li>UI Design and Development</li>
                <li>Rapid Prototyping</li>
                <li>SaaS Development</li>
                <li>Quality Assurance and Testing</li>
                <li>On-going Support and Development</li>
              </ul>
            </HeadLine>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaasDevelopment;

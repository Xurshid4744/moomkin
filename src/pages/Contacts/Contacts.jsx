import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styles from "./Contacts.module.scss";

import img1 from "../../assets/images/massage.png";
import img2 from "../../assets/images/facebook.png";
import img3 from "../../assets/images/twitr.png";
import img4 from "../../assets/images/linkedin.png";
import img5 from "../../assets/images/instagram.png";
import img6 from "../../assets/icons/dev.svg";

import img7 from "../../assets/icons/sertificat-1.svg";
import img8 from "../../assets/icons/sertificat-2.svg";
import img9 from "../../assets/icons/sertificat-3.svg";
import img10 from "../../assets/icons/sertificat-4.svg";
import img11 from "../../assets/icons/sertificat-5.svg";

import Title from "../../components/Title/Title";
import SoftwareCard from "../../components/Cards/SoftwareCard/SoftwareCard";
import CompanyProfile from "../../components/CompanyProfile/CompanyProfile";
const Contacts = () => {
  const menu = [{ link: "", label: "Contact us" }];
  const softCard = [
    {
      img: img7,
      title: "Recognized by Clutch.co",
    },
    {
      img: img8,
      title: "AMAZON Consulting Partner",
    },
    {
      img: img9,
      title: "Recognized by GoodFirms.co",
    },
    {
      img: img10,
      title: "Recognized by TopDigital.Agency",
    },
    {
      img: img11,
      title: "Recognized by  TechReviewer.co",
    },
  ];
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.wrapper} globalContainer`}>
          <BreadCrumb menu={menu} />
          <p>Contact us</p>
        </div>
      </section>
      <section className={styles.projectContainer}>
        <div className={`${styles.project} globalContainer`}>
          <div>
            <p className={styles.title}>
              Need custom software? <br /> Let’s start with a free quote!
            </p>
            <form>
              <div className={styles.form}>
                <textarea
                  name=""
                  id=""
                  placeholder="Tell us about your project"
                  className={styles.input}
                ></textarea>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>
              <div className={styles.check}>
                <input type="checkbox" />
                <p>
                  I agree with <b>Privacy Policy</b>
                </p>
              </div>
              <button>LET'S GET STARTED</button>
            </form>
          </div>
          <div>
            <div className={styles.email}>
              <img src={img1} alt="" />
              <p>info@sumatosoft.com</p>
            </div>
            <div className={styles.logo}>
              <a href="/">
                <img src={img2} alt="" width={40} />
              </a>
              <a href="/">
                <img src={img3} alt="" width={40} />
              </a>
              <a href="/">
                <img src={img4} alt="" width={40} />
              </a>
              <a href="/">
                <img src={img5} alt="" width={40} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.officeContainer}>
        <div className={`${styles.office} globalContainer`}>
          <Title title={"Our Office"} color={"#fff"} />
          <div className={styles.officeTitles}>
            <img src={img6} alt="" />
            <h4>Business Development</h4>
            <p>
              One Boston Place, Suite 2602 <br /> Boston, MA 02108, United
              States
            </p>
            <span className={styles.border}></span>
          </div>
        </div>
      </section>
      <section className={`${styles.rewards} globalContainer`}>
        <Title title={"Rewards & Recognitions"} />
        <p className={styles.rewardsTitle}>
          SumatoSoft has been recognized by the leading analytics agencies
          working with the best software development companies from all over the
          world. Our values and partners help us to provide the best services in
          the field.
        </p>
        <div className={styles.rewardsCards}>
          {softCard.map((item) => (
            <SoftwareCard
              img={item.img}
              subtitle={item.title}
              clas={false}
              key={item.title}
            />
          ))}
        </div>
      </section>
      <CompanyProfile title={"DOWNLOAD COMPANY'S PROFILE"} />
    </>
  );
};

export default Contacts;

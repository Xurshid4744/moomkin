import React, { useState } from "react";
import { Dropdown } from "antd";
import { Collapse } from "antd";

import { data} from "./helpers";
import logo from "../../assets/images/Moomkin.png";
import logo2 from "../../assets/images/Moomkin2.png";
import menuWhite from "../../assets/images/menu.png";
import menuBlack from "../../assets/images/menu2.png";
import close from "../../assets/images/close.png";

import styles from "./index.module.scss";
import "../../styles/_global.scss";
import { Link } from "react-router-dom";
const { Panel } = Collapse;

const Header = () => {
  const [change, setChange] = useState("white");
  const [open, setOpen] = useState(false);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 5) {
      setChange("blue");
    } else {
      setChange("white");
    }
  }
  const resData = [
    {
      title: <Link to={"/services"} onClick={() => setOpen(false)}>SERVICES</Link>,
      id: "1",
      text: [
        { li: "Business Analysis", link: "/services/business-analysis-services" },
        { li: "UX/UI Design", link: "/services/ui-ux-design" },
        { li: "Frontend & Backend Development", link: "/services/web-frontend-and-backend-development" },
        { li: "QA and Testing", link: "/services/quality-assurance" },
      ],
    },
    {
      title: <Link to={"/industries"} onClick={() => setOpen(false)}>INDUSTRIES</Link>,
      id: "2",
      text: [
        { li: "AdTech & Marketing", link: "/industries/advertising-and-marketing-automation-development" },
        { li: "EdTech & eLearning", link: "/industries/elearning-software-development" },
        { li: "Logistics & Transportation", link: "/industries/logistics-software-development" },
        { li: "E-Commerce", link: "/industries/ecommerce-development" },
      ],
    },
    {
      title: <Link to={"/expertise"} onClick={() => setOpen(false)}>EXPERTISE</Link>,
      id: "3",
      text: [
        { li: "Enterprise Apps", link: "/solutions/enterprise-software-development" },
        { li: "Startups Applications", link: "/solutions/startups-development" },
        { li: "Internet of Things", link: "/solutions/internet-of-things-software-development" },
        { li: "Mobile Applications", link: "/solutions/mobile-app-development" },
        { li: "SaaS Development", link: "/solutions/saas-development" },
      ],
    },
    {
      title: <Link to={"/clients"} onClick={() => setOpen(false)}>CLIENTS</Link>,
      id: "4",
      text: [
        { li: "Case Studies", link: "/portfolio" },
        { li: "Testimonials", link: "/testimonials" },
      ],
    },
    {
      title: <Link to={"/about"} onClick={() => setOpen(false)}>ABOUT US</Link>,
      id: "5",
      text: [
        { li: "Team", link: "/about#team"},
        { li: "Engagement Models", link: "/engagement-models" },
        { li: "Development Process", link: "/agile-development-process" },
        { li: "Contacts", link: "/contacts" },
      ],
    },
    {
      title: <Link to={"/insights"} onClick={() => setOpen(false)}>INSIGHTS</Link>,
      id: "6",
      text: [
        { li: "Whitepapers", link: "/all-whitepapers" },
        { li: "Blog", link: "/blog" },
      ],
    },
  ];
  return (
    <nav
      className={
        change === "white" ? `${styles.navigation}` : `${styles.navigation2}`
      }
    >
      <div className={`${styles.navContainer} globalContainer`}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={change === "white" ? logo : logo2} alt="logo" />
          </Link>
        </div>

        {data.map((item) => (
          <ul style={{ marginTop: "15px" }}>
            <Dropdown overlay={item.menu} placement="bottom">
              <ul>
                <Link to={item.link}>
                  <li>{item.title}</li>
                </Link>
                <i>{item.icon}</i>
              </ul>
            </Dropdown>
          </ul>
        ))}

        <div className={styles.buttons}>
          <button className={styles.contact}>CONTACT</button>
          <img
            src={change === "white" ? menuWhite : menuBlack}
            alt="menu"
            width={25}
            height={25}
            onClick={() => setOpen(true)}
          />
        </div>

        <div className={open ? styles.resMenu2 : styles.resMenu}>
          <div className={styles.resContainer}>
            <div className={styles.logo}>
              <Link to={"/"}>
                <img src={logo2} alt="logo" onClick={() => setOpen(false)} />
              </Link>
            </div>
            <div className={styles.btns}>
              <button className={styles.contact}>CONTACT</button>
              <img src={close} alt="img" onClick={() => setOpen(false)} />
            </div>
          </div>

          {resData.map((item) => (
            <Collapse
              bordered={false}
              expandIconPosition={"end"}
              className={styles.collapse}
            >
              <Panel header={item.title} key={item.id} className={styles.panel}>
                {item.text.map((item2) => (
                  <Link to={item2.link}>
                    <p onClick={() => setOpen(false)}>{item2.li}</p>
                  </Link>
                ))}
              </Panel>
            </Collapse>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;

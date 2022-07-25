import React from "react";
import AnimationText from "../../../../components/AnimationText/AnimationText";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";
import Title from "../../../../components/Title/Title";
import FlexCard from "../../../../components/Cards/FlexCard/FlexCard";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";
import SmallSwiper from "../../../../components/Swipers/SmallSwiper/SmallSwiper";

import styles from "./InternetOfThings.module.scss";
import toyota from "./../../../../assets/icons/toyota.svg";
import beiersdorf from "./../../../../assets/icons/beiersdorf.svg";
import dexai from "./../../../../assets/icons/dexai.svg";
import mymedias from "./../../../../assets/icons/mymediads.svg";
import boxfwd from "./../../../../assets/icons/boxfwd.svg";
import widgety from "./../../../../assets/icons/widgety.svg";
import daiokan from "./../../../../assets/icons/daiokan.svg";
import tlnika from "./../../../../assets/icons/tlnika.svg";
import retrieval from "./../../../../assets/icons/retrieval.svg";
import processing from "./../../../../assets/icons/processing.svg";
import analysis from "./../../../../assets/icons/analysis3.svg";
import prototype from "./../../../../assets/icons/prototype.svg";
import healthcare from "./../../../../assets/icons/healthcare.svg";
import retail from "./../../../../assets/icons/retail.svg";
import manufacturing from "./../../../../assets/icons/manufacturing.svg";
import smartHome from "./../../../../assets/icons/smartHome.svg";
import automative from "./../../../../assets/icons/automative.svg";
import niche from "./../../../../assets/icons/niche.svg";
import guarantee from "./../../../../assets/icons/guarantee.svg";
import security from "./../../../../assets/icons/security.svg";
import usability from "./../../../../assets/icons/usability.svg";
import scalability from "./../../../../assets/icons/scalability.svg";
import Haverman from "./../../../../assets/images/Haverman.png";
import Karbushev from "./../../../../assets/images/Karbushev.jpg";
import img1 from "../../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../../assets/images/napa.png";
import img3 from "../../../../assets/images/kingbok.jpg";
import img4 from "../../../../assets/images/edcontrol.png";
import img5 from "../../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../../assets/images/it-park.jpg";
import sertificat1 from "../../../../assets/icons/sertificat-1.svg";
import sertificat2 from "../../../../assets/icons/sertificat-2.svg";
import sertificat3 from "../../../../assets/icons/sertificat-3.svg";
import sertificat4 from "../../../../assets/icons/sertificat-4.svg";
import sertificat5 from "../../../../assets/icons/sertificat-5.svg";
import sertificat6 from "../../../../assets/icons/sertificat-6.svg";
import Acardion from "../../../../components/Acardion/Acardion";
import ProjectAnalysis from "../../../../components/ProjectAnalysis/ProjectAnalysis";

const InternetOfThings = () => {
  const img = [
    {
      img: toyota,
    },
    {
      img: beiersdorf,
    },
    {
      img: dexai,
    },
    {
      img: mymedias,
    },
    {
      img: boxfwd,
    },
    {
      img: widgety,
    },
    {
      img: daiokan,
    },
    {
      img: tlnika,
    },
  ];

  const cards = [
    {
      img: retrieval,
      title: "DATA RETRIEVAL",
      subtitle:
        "One of the key points in building IoT software - to design and build solutions for data gathering from any hardware source (sensor, wearable, or industrial device). The data should be cleared, structured and securely stored in the cloud, or sent to the final receiver.",
    },
    {
      img: processing,
      title: "DATA PROCESSING",
      subtitle:
        "Data brings little value if it is not processed, structured and presented in the right way. We build IoT ecosystem architectures to ensure efficient H2M/M2M communications. We set up scalable cloud applications to aggregate IoT data and process it.",
    },
    {
      img: analysis,
      title: "DATA ANALYSIS",
      subtitle:
        "Best practices of Big Data analytics help to collect, process and analyze Internet of Things data. We also develop custom visually appealing IoT data visualization solutions. Consequently, you benefit from important business insights.",
    },
    {
      img: prototype,
      title: "HARDWARE PROTOTYPE",
      subtitle:
        "Additionally to IoT software development services with the help of our IoT hardware development partner, we plan, launch and manage custom devices and sensor prototypes development. ",
    },
  ];

  const flexCard = [
    {
      img: healthcare,
      title: "HEALTHCARE",
      children: (
        <div>
          <ul>
            <li>Remote Patient Monitoring (RPM)</li>
            <li>Medical Imaging Solutions</li>
            <li>TModernize Patient Assistance</li>
            <li>and more</li>
          </ul>
        </div>
      ),
    },
    {
      img: retail,
      title: "RETAIL",
      children: (
        <div>
          <ul>
            <li>Smart Shelves</li>
            <li>Delivery Operations</li>
            <li>Warehouse Automation</li>
            <li>and more</li>
          </ul>
        </div>
      ),
    },
    {
      img: manufacturing,
      title: "MANUFACTURING",
      children: (
        <div>
          <ul>
            <li>Robotics</li>
            <li>Remote Sensing</li>
            <li>Predictive Maintenance</li>
            <li>and more</li>
          </ul>
        </div>
      ),
    },
    {
      img: smartHome,
      title: "SMART HOME & CITIES",
      children: (
        <div>
          <ul>
            <li>Smart Traffic Lights</li>
            <li>Waste Management System</li>
            <li>CCTV surveillance systems</li>
            <li>and more</li>
          </ul>
        </div>
      ),
    },
    {
      img: automative,
      title: "HEALTHCARE",
      children: (
        <div>
          <ul>
            <li>Fleet Management & Monitoring</li>
            <li>Vehicle Tracking</li>
            <li>Safe Driver Services</li>
            <li>and more</li>
          </ul>
        </div>
      ),
    },
    {
      img: niche,
      title: "YOUR NICHE",
      children: (
        <div>
          <ul>
            Get in touch with us and find out how IoT apps can bring value to
            your business.
          </ul>
        </div>
      ),
    },
  ];

  const obj = [
    {
      img: Haverman,
      name: "Yury Haverman",
      position: "BoxForward",
      job: "Founder",
      title:
        "SumatoSoft team not only knew well how to build a partnership-based working process, but also offered sensible suggestions and advice helping us to reach the long-term business goals.We are completely satisfied with the results of our cooperation and will be happy to recommend SumatoSoft as a reliable and competent partner for development of web-based solutions.",
    },
    {
      img: Karbushev,
      name: "Michael Karbushev",
      position: "Evolv",
      job: "Senior Director of Engineering",
      title:
        "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    },
  ];
  
  const workWith = [
    {
      img: guarantee,
      title: "GUARANTEE PROVIDED",
      subtitle:
        "We provide a long-term guarantee on the IoT software we develop.",
    },
    {
      img: security,
      title: "SECURITY IS PRIORITY",
      subtitle:
        "SumatoSoft considers security as an integral part of any IoT application development.",
    },
    {
      img: usability,
      title: "FOCUS ON USABILITY",
      subtitle:
        "We make Internet of Things applications that are easy and convenient to work with.",
    },
    {
      img: scalability,
      title: "SCALABILITY FROM DAY ONE",
      subtitle:
        "We make our IoT software scalable for future changes - new features, users, workload.",
    },
  ];

  const data = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    title: "Recent Projects We Made",
  };

  const reward = [
    {
      img: sertificat1,
      title: "Recognized by Clutch.co",
    },
    {
      img: sertificat2,
      title: "AMAZON Consulting Partner",
    },
    {
      img: sertificat3,
      title: "Recognized by GoodFirms.co",
    },
    {
      img: sertificat4,
      title: "Recognized by TopDigital.Agency",
    },
    {
      img: sertificat5,
      title: "Recognized by TechReviewer.co",
    },
    {
      img: sertificat6,
      title: "Hign Tech Park Resident",
    },
  ];

  const faqs = [
    {
      title: "What is IoT development?",
      text: 'The Internet of Things (IoT) is a network of physical objects, devices ("things") embedded with sensors, software, and other technologies. The purpose of IoT software development is to connect and exchange data with other devices and systems over the Internet'
    },
    {
      title: "What are the fundamental components of IoT?",
      text: "All complete Internet of Things (IoT) systems are composed of four different components: sensors/devices, connectivity, data processing, and user interface. Some Internet of Things software development projects may require other layers (e.g. security, technology and governance standards, etc) but these four components represent the foundation of every IoT solution."
    },
    {
      title: "Is the IoT secure?",
      text: "Each connected IoT device collects data, sometimes very sensitive personal or business data (e.g. healthcare). Therefore, businesses using Internet of Things solutions and IoT software development companies should pay special attention to network protection. If you work with professional Internet of Things software development provider, they will be able to manage and protect you from the following top IoT security risks:"
    },
    {
      title: "How Much Does IoT Development Cost?",
      text: "The cost of IoT solutions will consist of 2 main parts - device cost and the Internet of Things software development cost (connectivity, data processing, and user interface development). Device cost will vary depending on if it is a ready-made device or sensor or an absolutely custom and innovative device. IoT software development cost will highly depend on the application scope and usually starts at $20K for an MVP."
    },
  ]
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.body}>
        <div>
          <AnimationText
            title={"IoT project will fail"}
            subtitle={"if the system can’t scale up."}
          />
        </div>
        <div className={styles.whitebg}>
          <div className={`${styles.img} globalContainer`}>
            {img.map((item) => (
              <div className={styles.Cards}>
                <SoftwareCard img={item.img} clas={false} />
              </div>
            ))}
          </div>
          <Title title={"Our IoT Development Services"} />
          <p className={`${styles.p} globalContainer`}>
            We develop secure IoT web and mobile applications to help you
            connect and manage devices and make business data-driven decisions.
            All solutions comply with all best industry standards and
            approaches. Let our team of tech experts step into your IoT
            development process today to bring business value tomorrow.
          </p>
          <div className={`${styles.InfoCards} globalContainer`}>
            {cards.map((item) => (
              <div className={styles.Cards}>
                <SoftwareCard
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  clas={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.title}>
          <Title title={"Industry-Focused IoT App Development"} />
          <p className={`${styles.p} globalContainer`}>
            Companies all over the world are just starting to understand the
            true potential behind the Internet of Things technologies and the
            value of collecting and analyzing data. The fact is that the
            opportunities are unlimited, and each industry can find ways to
            benefit from IoT software development and boost their business.
          </p>
          <div className={`${styles.FlexCard} globalContainer`}>
            {flexCard.map((item) => (
              <div className={styles.asdas}>
                <FlexCard
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  children={item.children}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.whitebg}>
          <div className={styles.title}>
            <Title title={"IoT Development Strategy"} />
          </div>
          <p className={`${styles.p} globalContainer`}>
            As a part of IoT software development, we help our clients to manage
            requirements, make a detailed hardware-software integration roadmap,
            implement the best IoT app development practices from the very
            initial prototyping stage to mass production phase.
          </p>
        </div>
        <div className={styles.title}>
          <Title title={"Our Happy Clients"} />
        </div>
        <div className={`${styles.swiper} globalContainer`}>
          <BigSwiper obj={obj} />
        </div>
        <div className={styles.whitebg}>
          <div className={styles.title}>
            <Title
              title={"Why SumatoSoft is the Right IoT Company to Work with?"}
            />
          </div>
          <p className={`${styles.p} globalContainer`}>
            Since 2012, we have helped companies to gain competitive benefits by
            applying the best IT innovations, one of which is IoT. Over the
            years, we have gained rich experience in the Internet of Things
            software development and summarized some mandatory requirements for
            IoT development.
          </p>
          <div className={`${styles.InfoCards} globalContainer`}>
            {workWith.map((item) => (
              <div className={styles.Cards}>
                <SoftwareCard
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  clas={false}
                />
              </div>
            ))}
          </div>
          <SmallSwiper obj={data} />
        </div>
        <div className={styles.blueInfo} >
          <Title title={"IoT Software Development Technologies"} color={"white"}/>
          <div className={`${styles.blueinf} globalContainer`}>
            <div className={styles.type}>Programming languages:</div>
            <div className={styles.txt}>C/C++, Python, Ruby, JavaScript</div>
          </div>
          <div className={`${styles.blueinf} globalContainer`}>
            <div className={styles.type}>Development frameworks:</div>
            <div className={styles.txt}>Node.Js (Node-Red for rapid prototyping), Ot, IoT.js, Device.js, Eclipse IoT (Kura, SmartHome), AngularJS</div>
          </div>
          <div className={`${styles.blueinf} globalContainer`}>
            <div className={styles.type}>Platforms:</div>
            <div className={styles.txt}>Amazon Web Services IoT, Microsoft Azure IoT, Google Cloud IoT, openHAB, IBM Bluemix IoT,</div>
          </div>
          <div className={`${styles.blueinf} globalContainer`}>
            <div className={styles.type}>Communication protocols:</div>
            <div className={styles.txt}>Wi-Fi, Cellular (2G, 3G, 4G, LTE), Bluetooth, BLE, ZigBee, NFC, RFID, Z-Wave, USB, IPv6, CoAP, MQTT, EIB, AMQP, HTTP/HTTPS, DALI, 1-wire, Siemens (S7)</div>
          </div>
          <div className={`${styles.blueinf} globalContainer`}>
            <div className={styles.type}>Hardware:</div>
            <div className={styles.txt}>Raspberry Pi, Arduino, Beacons, Microcontrollers (ESP32, ESP8266), Google TPU, FPGA controllers</div>
          </div>
          <div className={`${styles.blueinf} globalContainer`}>
            <div className={styles.type}>Sensor Technology:</div>
            <div className={styles.txt}>Analog, ADC, I2C, 1-Wire, RF433, various analog and digital sensors, compatible with Ardiuno and Raspberry Pi, custom sensor R&D</div>
          </div>
          <div className={`${styles.blueinf} globalContainer`}>
            <div className={styles.type}>3d-party APIs:</div>
            <div className={styles.txt}>Google Assistant, Google Home (Actions on Google), Google Vision, Apple HomeKit, MI Light, Cortana, Alexa Voice Service, Philips Hue,  Android Things</div>
          </div>
        </div>
        <div className={styles.whitebg}>
          <Title title={"Rewards & Recognitions"} />
          <p className={styles.p}>
            SumatoSoft has been recognized by the leading analytics agencies
            working with the best software development companies <br /> from all
            over the world. Our values and partners help us to provide the best
            software development services for startups in <br /> the field.
          </p>
          <div className={`${styles.reward} globalContainer`}>
            {reward.map((item) => (
              <div>
                <SoftwareCard
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  clas={false}
                />
              </div>
            ))}
          </div>
          </div>
          <div className={`${styles.faqs} globalContainer`}>
          <Title title={"Frequently Asked Questions"} />
          <p className={styles.p}>Answers to commonly asked questions</p>
          <Acardion data={faqs}/>
        </div>
        <div className={styles.blueAsk}>
          <ProjectAnalysis />
        </div>
      </div>
    </>
  );
};

export default InternetOfThings;

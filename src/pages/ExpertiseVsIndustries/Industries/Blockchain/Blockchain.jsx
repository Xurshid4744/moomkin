import React from 'react';
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb';
import SoftwareCard from '../../../../components/Cards/SoftwareCard/SoftwareCard';
import Title from '../../../../components/Title/Title';
import styles from './Blockchain.module.scss';

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
          <div>
            <div>
              <SoftwareCard
                hcolor={"black"}
                img={""}
                title={"SMART CONTRACTS"}
                subtitle={"We develop, test and deploy tailor-made smart contracts with unique business logic that enable you to perform credible transactions."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={""}
                title={"DECENTRALIZED APP DEVELOPMENT"}
                subtitle={"We build high-end DApps that combine a number of interrelated smart contracts that share common logic and frontend."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={""}
                title={"ICO SOLUTIONS"}
                subtitle={"We provide you with our professional expertise thus enabling you to launch a successful crowdfunding campaign."}
              />
            </div>
            <div>
              <SoftwareCard
                hcolor={"black"}
                img={""}
                title={"CUSTOM BLOCKCHAIN NETWORKS"}
                subtitle={"With our solid background and expertise in blockchain development, we deliver customized solutions that will refuel your business."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={""}
                title={"CRYPTO WALLET DEVELOPMENT"}
                subtitle={"We create crypto wallet DApps that support multiple cryptocurrencies and contain information about your wallet balance and more."}
              />
              <SoftwareCard
                hcolor={"black"}
                img={""}
                title={"SECURITY BOOST"}
                subtitle={"We develop decentralized data storages to boost security, integrate data, ensure better access control and reduce risks."}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blockchain;
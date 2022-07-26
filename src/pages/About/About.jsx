import React from "react";
import CompanyProfile from "../../components/CompanyProfile/CompanyProfile";
import ProjectAnalysis from "../../components/ProjectAnalysis/ProjectAnalysis";
import SomeFacts from "../Home/_components/SomeFacts/SomeFacts";
import Development from "./_components/Development/Development";

// import styles from "./index.module.scss";
import MainBanner from "./_components/MainBanner/MainBanner";
import OurClients from "./_components/OurClients/OurClients";
import Team from "./_components/Team/Team";
import WayWork from "./_components/WayWork/WayWork";
const About = () => {
  return (
    <>
      <MainBanner />
      <SomeFacts boolean={true} />
      <Development/>
      <Team/>
      <OurClients/>
      <WayWork/>
      <ProjectAnalysis/>
      <CompanyProfile title={"DOWNLOAD COMPANY'S PROFILE"}/>
    </>
  );
};

export default About;

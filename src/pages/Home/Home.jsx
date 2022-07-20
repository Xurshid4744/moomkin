import React from "react";
import DiscussProject from "../../components/DiscussProject/DiscussProject";
import ProjectAnalysis from "../../components/ProjectAnalysis/ProjectAnalysis";
import BuildSoftware from "./_components/BuildSoftware/BuildSoftware";
import CoreSoftware from "./_components/CoreSoftware/CoreSoftware";
import CustomSoft from "./_components/CustomSoftware/CustomSoft";
import MainHeading from "./_components/MainHeading/MainHeading";
import RecentProject from "./_components/RecentProject/RecentProject";
import SomeFacts from "./_components/SomeFacts/SomeFacts";
import SuccessStories from "./_components/SuccessStories/SuccessStories";
const Home = () => {
  return (
    <>
      <MainHeading/>
      <CustomSoft/>
      <CoreSoftware/>
      <BuildSoftware/>
      <SuccessStories/>
      <DiscussProject/>
      <RecentProject/>
      <SomeFacts/>
      <ProjectAnalysis/>
    </>
  );
};

export default Home;

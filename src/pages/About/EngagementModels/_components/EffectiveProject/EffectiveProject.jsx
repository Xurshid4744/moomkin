import React from "react";
import styles from "./EffectiveProject.module.scss";
import Title from "../../../../../components/Title/Title";
import FlexCard from "../../../../../components/Cards/FlexCard/FlexCard";

import img1 from "../../../../../assets/icons/COMMUNICATION.svg";
import img2 from "../../../../../assets/icons/COMPETENCE.svg";
import img3 from "../../../../../assets/icons/PLANNING.svg";

const EffectiveProject = () => {
  return (
    <div className={styles.bcgColor}>
      <div className="globalContainer">
        <Title color={"#fff"} title="Effective Project Organization" />
        <div className={styles.detail}>
          No matter what engagement model you will choose to work with
          SumatoSoft, we guarantee that the development process will be
          effective and productive.
        </div>
        <div className={styles.about}>
          <div>
            <FlexCard
              img={img1}
              title={"COMMUNICATION"}
              width={"40"}
              height={"40"}
              color={"#fff"}
            >
              <p className={styles.flexCardParagraph}>
                A qualified project manager will be responsible for the project
                planning, management, work coordination and progress tracking.
                He/She will be a mediator between the team and the Client.
                Various types of communication means are available: email,
                messengers, phone and personal meetings.
              </p>
            </FlexCard>
          </div>
          <div>
            <FlexCard
              img={img2}
              title={"COMPETENCE TRANSFER"}
              width={"40"}
              height={"40"}
              color={"#fff"}
            >
              <p className={styles.flexCardParagraph}>
                Knowledge Transfer is a comprehensive business process ensuring
                that all information about the project is shared among the Team,
                Technical Manager and ScrumMaster. All data are gathered in a
                special formalized knowledge base (Atlassian Confluence), which
                is under the supervision of tech leaders.
              </p>
            </FlexCard>
          </div>
          <div>
            <FlexCard
              img={img3}
              title={"PLANNING AND REPORTING"}
              width={"40"}
              height={"40"}
              color={"#fff"}
            >
              <p className={styles.flexCardParagraph}>
                SumatoSoft undertakes a commitment of regular and clear
                reporting on the project. The types of reports presented depend
                on the chosen engagement model: real time 24/7 reporting via
                Jira Atlassian, monthly reports, etc. It ensures transparency of
                the process and clear vision of the cost at every stage.
              </p>
            </FlexCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectiveProject;

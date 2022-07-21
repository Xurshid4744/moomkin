import React from "react";
import styles from "./TimeMaterialModel.module.scss";
import Title from "../../../../../components/Title/Title";
import FlexCard from "../../../../../components/Cards/FlexCard/FlexCard";

import img1 from "../../../../../assets/icons/how.svg";
import img2 from "../../../../../assets/icons/when.svg";
import img3 from "../../../../../assets/icons/business.svg";

const TimeMaterialModel = () => {
  return (
    <div className={styles.bcgColor}>
      <div className="globalContainer">
        <Title color={"#000"} title="Time & Material Model" />
        <div className={styles.detail}>
          Time & Material engagement model presupposes that billing is based on
          actual time invested into the development (man-hours actually worked)
          and actual cost of materials and equipment usage. This model is
          flexible to clients changing needs for time and resources.
        </div>
        <div className={`${styles.about} ${styles.marginBtm}`}>
          <div>
            <FlexCard
              img={img1}
              title={"HOW DOES IT WORK?"}
              width={"40"}
              height={"40"}
            >
              <p className={styles.flexCardParagraph}>
                When we get a general overview of the project, we will gather a
                team of skilled professionals to work on the solution. No
                detailed specification is needed to start the project. The team
                can be charged depending on the project requirements revealed
                during work.
              </p>
            </FlexCard>
          </div>
          <div>
            <FlexCard
              img={img2}
              title={"WHEN IS IT BEST USED?"}
              width={"40"}
              height={"40"}
            >
              <ul className={styles.flexCardUl}>
                <li>
                  There are no detailed project documentation or it has
                  insufficient level of details.
                </li>
                <li>
                  Project specifications and requirement are constantly evolving
                  and changing.
                </li>
                <li>
                  A long-term cooperation with the Service provider is planned.
                </li>
                <li>The deadline are not clearly defined.</li>
              </ul>
            </FlexCard>
          </div>
          <div>
            <FlexCard
              img={img3}
              title={"BUSINESS BENEFITS"}
              width={"40"}
              height={"40"}
            >
              <ul className={styles.flexCardUl}>
                <li>
                  Lover cost - Time and Material contract cost may turn out to
                  be less than in a fixed bid.
                </li>
                <li>
                  Agility of workflow - it is easy to change priorities of
                  specific features and add new ones within the same budget.
                </li>
                <li>
                  Time schedule flexibility - deadline can be easily changed if
                  needed.
                </li>
                <li>
                  Reduce the risk of unmet expectations - the whole process is
                  transparent and clear, payment occurs when the specific
                  functionality is developed.
                </li>
              </ul>
            </FlexCard>
          </div>
        </div>
      </div>
      <div className="globalContainer">
        <Title color={"#000"} title="Dedicated Team Model" />
        <div className={styles.detail}>
          Our specialists become a part of your team working exclusively on your
          project. Billing is based on hourly rates of the developers included
          into the dedicated team.
        </div>
        <div className={styles.about}>
          <div>
            <FlexCard
              img={img1}
              title={"HOW DOES IT WORK?"}
              width={"40"}
              height={"40"}
            >
              <p className={styles.flexCardParagraph}>
                Business owners provide us a general list of project
                requirements and we gather the team of professionals who can do
                this job best. The client is fully responsible for the team
                management and control. The developers will report directly to
                the client. On our part, we will monitor the quality of the
                services provided and get involved if necessary.
              </p>
            </FlexCard>
          </div>
          <div>
            <FlexCard
              img={img2}
              title={"WHEN IS IT BEST USED?"}
              width={"40"}
              height={"40"}
            >
              <ul className={styles.flexCardUl}>
                <li>
                  Project idea is well thought and defined, all project
                  requirements are available and the development is about to
                  start.
                </li>
                <li>
                  You have in-house specialists who can manage the software
                  development process.
                </li>
              </ul>
            </FlexCard>
          </div>
          <div>
            <FlexCard
              img={img3}
              title={"BUSINESS BENEFITS"}
              width={"40"}
              height={"40"}
            >
              <ul className={styles.flexCardUl}>
                <li>
                  Full control over the project progress and budget scheme.
                </li>
                <li>
                  No need to employ qualified specialists spending time and
                  resources on hiring and management process.
                </li>
              </ul>
            </FlexCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeMaterialModel;

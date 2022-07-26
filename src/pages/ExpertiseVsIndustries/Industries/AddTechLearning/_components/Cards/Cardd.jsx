import React from 'react';
import LearningMenagment from '../../../../../../assets/images/learningMenagment.svg'
import DigitalPublishing from '../../../../../../assets/images/digitalPublishing.svg'
import LearningGame from '../../../../../../assets/images/learningGame.svg';
import OnlineCommun from '../../../../../../assets/images/onlineCommun.svg';
import Assesment from '../../../../../../assets/images/assesment.svg';
import MenagmentSoftware from '../../../../../../assets/images/menagmentSoftware.svg';
import SoftwareCard from '../../../../../../components/Cards/SoftwareCard/SoftwareCard';

import styles from './Caardd.module.scss';

const Cardd = () => {
  return (
    <div className={styles.wrapper}>
        <SoftwareCard 
         title={"LEARNING MANAGEMENT SYSTEMS"}
         img={LearningMenagment}
         clas={false}
        />
        <SoftwareCard
         title={"DIGITAL PUBLISHING PLATFORMS"}
         img={DigitalPublishing}
         clas={false}
        />
        <SoftwareCard
         title={"E-LEARNING GAMIFICATION SOLUTIONS"}
         img={LearningGame}
         clas={false}
        />
        <SoftwareCard
         title={"ONLINE COMMUNICATION SOFTWARE"}
         img={OnlineCommun}
         clas={false}
        />
        <SoftwareCard
         title={"ASSESSMENT AND EVALUATION SOFTWARE"}
         img={Assesment}
         clas={false}
        />
        <SoftwareCard
         title={"MANAGEMENT & ADMINISTRATION SOFTWARE"}
         img={MenagmentSoftware}
         clas={false}
        />
    </div>
  )
}

export default Cardd;
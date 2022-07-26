import React from 'react';

import AutoAnalyic from '../../../../../../assets/images/autoAnalyic.svg';
import MobRemote from '../../../../../../assets/images/mobRemote.svg';
import TimeCost from '../../../../../../assets/images/timeCost.svg';

import SoftwareCard from '../../../../../../components/Cards/SoftwareCard/SoftwareCard';

import styles from './Custom.module.scss';

const Cardd = () => {
    return (
        <div className={styles.wrapper}>
            <SoftwareCard
                title={"AUTOMATION & ANALYTICS"}
                subtitle={"Teachers can track student’s or the whole class’s progress in real-time and build effective online communication thanks to analytics dashboards and a system of notifications."}
                img={AutoAnalyic}
                clas={false}
            />
            <SoftwareCard
                title={"MOBILITY & REMOTE"}
                subtitle={"Let your students learn wherever they want. Your students have quick access to the educational materials they personally need. The use of laptops, tablets or phones makes a comfortable classroom out of the whole world."}
                img={MobRemote}
                clas={false}
            />
            <SoftwareCard
                title={"TIME & COST-EFFICIENCY"}
                subtitle={"e-Learning software allows saving valuable time resources and funds on task management and scheduling by providing high-end multi-functional solutions for students and teachers."}
                img={TimeCost}
                clas={false}
            />
        </div>
    )
}

export default Cardd;
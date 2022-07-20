import React from 'react';
import ReduceCost from '../../../../../../assets/images/reduceCosts.svg';
import Analyize from '../../../../../../assets/images/analyize.svg';
import Cordinate from '../../../../../../assets/images/cordinate.svg';
import Boost from '../../../../../../assets/images/boost.svg';
import Control from '../../../../../../assets/images/control.svg';
import SoftwareCard from '../../../../../../components/Cards/SoftwareCard/SoftwareCard';

import styles from './Cardd.module.scss';

const Cardd = () => {
  return (
    <div className={styles.wrapper}>
        <SoftwareCard 
         title={"REDUCE COSTS"}
         subtitle={'Pay no commission to any third-party vendor taking your media-buying process in-house.'}
         img={ReduceCost}
         clas={false}
        />
        <SoftwareCard
         title={"ANALYZE DATA"}
         subtitle={'Turn unprocessed information into valuable insights with Big Data analysis and machine learning.'}
         img={Analyize}
         clas={false}
        />
        <SoftwareCard
         title={"COORDINATE WORK"}
         subtitle={'Pay no commission to any third-party vendor taking your media-buying process in-house.'}
         img={Cordinate}
         clas={false}
        />
        <SoftwareCard
         title={"BOOST STRATEGY"}
         subtitle={'Improve the success rate of your online and offline advertising activities with up-to-date tools.'}
         img={Boost}
         clas={false}
        />
        <SoftwareCard
         title={"CONTROL BUDGET"}
         subtitle={'Gain a total control over your data and costs associated with the whole marketing expenses.'}
         img={Control}
         clas={false}
        />
    </div>
  )
}

export default Cardd;
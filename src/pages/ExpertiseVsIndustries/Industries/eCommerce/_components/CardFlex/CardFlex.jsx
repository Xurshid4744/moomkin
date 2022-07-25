import React from 'react';
import FlexCard from '../../../../../../components/Cards/FlexCard/FlexCard';

import PlanningLaunch from '../../../../../../assets/images/planningLaunch.svg';
import Growth from '../../../../../../assets/images/growth.svg';
import Migration from '../../../../../../assets/images/migration.svg';
import styles from './CardFlex.module.scss';

const CardFlex = () => {
    return (
        <>
            <div className={`${styles.cards_wrapper} globalContainer`}>
                <FlexCard img={PlanningLaunch} title={"PLANNING & LAUNCH"}>
                    <div className={styles.card_wrapper}>
                        <p className={styles.ecommere_text}>Planning to launch your first eCommerce application? New to the digital world? We will help and guide you through the whole process of planning, designing, developing, and launching the eCommerce website aligning it with your business goals.</p>
                        <ul className={styles.ecommere_ul}>
                            <li className={styles.ecommere_ul__li}>Business workflow mapping</li>
                            <li className={styles.ecommere_ul__li}>Technology and design consulting</li>
                            <li className={styles.ecommere_ul__li}>Competitors analysis</li>
                            <li className={styles.ecommere_ul__li}>UX/UI research</li>
                            <li className={styles.ecommere_ul__li}>Ecommerce application design & development</li>
                        </ul>
                    </div>
                </FlexCard>
                <FlexCard img={Growth} title={"GROWTH & OPTIMIZATION"}>
                    <div className={styles.card_wrapper}>
                        <p className={styles.ecommere_text}>Have an eCommerce store already? It’s high time to work on customer experience and business process improvements, open new sales and marketing opportunities, and adapt to new market trends.</p>
                        <ul className={styles.ecommere_ul}>
                            <li className={styles.ecommere_ul__li}>Business processes digitalization</li>
                            <li className={styles.ecommere_ul__li}>Customer journey mapping</li>
                            <li className={styles.ecommere_ul__li}>UX/UI audit and redesign</li>
                            <li className={styles.ecommere_ul__li}>Loyalty programs implementation</li>
                            <li className={styles.ecommere_ul__li}>Scaling and upgrading</li>
                            <li className={styles.ecommere_ul__li}>Data analytics</li>
                            <li className={styles.ecommere_ul__li}>Back-office automation</li>
                        </ul>
                    </div>
                </FlexCard>
                <FlexCard img={Migration} title={"MIGRATION"}>
                    <div className={styles.card_wrapper}>
                        <p className={styles.ecommere_text}>Your current eCommerce platform doesn’t perform well? Doesn’t meet your business requirements? We can find an appropriate eCommerce solution for your new business goals. We will research your goals, possible options and suggest several best-fitted software solutions for you.</p>
                        <ul className={styles.ecommere_ul}>
                            <li className={styles.ecommere_ul__li}>Current ecommerce solution audit</li>
                            <li className={styles.ecommere_ul__li}>Technology & architecture consultations</li>
                            <li className={styles.ecommere_ul__li}>Design customization</li>
                            <li className={styles.ecommere_ul__li}>Data migration and analytics</li>
                            <li className={styles.ecommere_ul__li}>Business processes automation</li>
                        </ul>
                    </div>
                </FlexCard>
            </div>
        </>
    )
}

export default CardFlex
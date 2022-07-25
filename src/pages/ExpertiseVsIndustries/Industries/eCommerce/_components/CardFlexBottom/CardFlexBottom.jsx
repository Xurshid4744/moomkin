import React from 'react';
import FlexCard from '../../../../../../components/Cards/FlexCard/FlexCard';

import CustomEcommere from '../../../../../../assets/images/customEcommere.svg';
import SpreeEcommere from '../../../../../../assets/images/spreeEcommere.svg';
import ShopifyEcommere from '../../../../../../assets/images/shopifyEcommere.svg';
import styles from './CardFlexBottom.module.scss';

const CardFlex = () => {
    return (
        <>
            <div className={`${styles.cards_wrapper} globalContainer`}>
                <FlexCard img={CustomEcommere} title={"CUSTOM ECOMMERCE APPLICATIONS"}>
                    <div className={styles.card_wrapper}>
                        <p className={styles.ecommere_text}>Custom eCommerce development fits businesses that have complicated business processes, require special integrations, or high-load support.</p>
                        <ul className={styles.ecommere_ul}>
                            <li className={styles.ecommere_ul__li}>Full customization to business processes</li>
                            <li className={styles.ecommere_ul__li}>Detailed analytics & statistics</li>
                            <li className={styles.ecommere_ul__li}>Complex integrations Special technical requirements support</li>
                            <li className={styles.ecommere_ul__li}>UX/UI research</li>
                            <li className={styles.ecommere_ul__li}>Dedicated development team</li>
                        </ul>
                    </div>
                </FlexCard>
                <FlexCard img={SpreeEcommere} title={"SPREE ECOMMERCE APPS"}>
                    <div className={styles.card_wrapper}>
                        <p className={styles.ecommere_text}>Spree Commerce platform is one of the best open-source ecommerce solutions available which allows launching customized ecommerce applications faster and at lower cost.</p>
                        <ul className={styles.ecommere_ul}>
                            <li className={styles.ecommere_ul__li}>Free Open-source solution</li>
                            <li className={styles.ecommere_ul__li}>Modular design</li>
                            <li className={styles.ecommere_ul__li}>Unlimited extensibility</li>
                            <li className={styles.ecommere_ul__li}>Pro development community</li>
                        </ul>
                    </div>
                </FlexCard>
                <FlexCard img={ShopifyEcommere} title={"SHOPIFY SOLUTIONS"}>
                    <div className={styles.card_wrapper}>
                        <p className={styles.ecommere_text}>Shopify platform is one of the most popular platforms for starting ecommerce websites from scratch with wide opportunities for functionality and design customization.</p>
                        <ul className={styles.ecommere_ul}>
                            <li className={styles.ecommere_ul__li}>Fast ecommerce website launch</li>
                            <li className={styles.ecommere_ul__li}>Out-of-box solution</li>
                            <li className={styles.ecommere_ul__li}>Design and functionality customization</li>
                        </ul>
                    </div>
                </FlexCard>
            </div>
        </>
    )
}

export default CardFlex;
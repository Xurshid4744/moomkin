import React from 'react'

import styles from "./index.module.scss";
const CompanyProfile = ({title}) => {
  return (
    <section className={styles.container}>
        <h4>{title}</h4>
    </section>
  )
}

export default CompanyProfile
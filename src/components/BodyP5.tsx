import React from 'react'
import styles from './BodyP5.module.css'
import { Containercontent } from '../Containercontent'
import { MenuBenefit } from '../MenuBenefit/MenuBenefit'
import { OpeningHours } from '../OpeningHours/OpeningHours'

export const BodyP5: React.FC = () => {
  return (
    <div className={styles.bodyP5Container}>
      <Containercontent className={styles.bodyP5}>
        <div className={styles.footerContent}>
          <MenuBenefit />
          <OpeningHours />
        </div>
      </Containercontent>
    </div>
  )
}

export default BodyP5
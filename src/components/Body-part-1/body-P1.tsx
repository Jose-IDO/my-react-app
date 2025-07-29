import React from 'react'
import { Containercontent } from '../Containercontent'
import styles from './body-p1.module.css'

type Props = {
  className?: string;
}

export const BodyP1: React.FC<Props> = () => {
  return (
    <Containercontent className={styles.wholebodyp1}>
      <div className={styles.imageWrapper}>
        <img
          src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/fruitbowl2.png"
          alt="fruit bowl"
          className={styles.fruitbowl}
        />
        <div className={styles.overlayText}>South Africas</div>
      </div>
    </Containercontent>
  )
}

export default BodyP1

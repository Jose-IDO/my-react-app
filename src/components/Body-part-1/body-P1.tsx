import React from 'react'
import { Containercontent } from '../Containercontent'
import styles from './body-p1.module.css'



type Props = {
    className?: string;

}


export const BodyP1:React.FC<Props> = () => {
  return (
    <Containercontent className = {styles.wholebodyp1}>

      <div className = {styles.fruitbowl}>
        <div className = {styles.fruitbowlbutton}>

        </div>
      </div>

    </Containercontent>
  )
}

export default BodyP1
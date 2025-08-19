import React from 'react'
import styles from './OpeningHours.module.css'
import { Text } from '../text/text'

export const OpeningHours: React.FC = () => {
  const hours = [
    { day: "Monday", time: "17:00 am +17" },
    { day: "Tuesday", time: "13:60 am +17" },
    { day: "Wednesday", time: "19:00 am +17" },
    { day: "Thursday", time: "17:00 am +17" }
  ]

  return (
    <div className={styles.openingHours}>
      <Text variant="h2" style={{ 
        color: 'white', 
        fontSize: 'clamp(20px, 3vw, 32px)', 
        marginBottom: '30px',
        fontWeight: 'bold'
      }}>
        OPENING HOURS
      </Text>
      
      <div className={styles.hoursList}>
        {hours.map((schedule, index) => (
          <div key={index} className={styles.hourItem}>
            <Text variant="p" style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              fontSize: 'clamp(14px, 2vw, 16px)',
              flex: 1
            }}>
              {schedule.day}
            </Text>
            <Text variant="p" style={{ 
              color: 'white', 
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: '600'
            }}>
              {schedule.time}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OpeningHours
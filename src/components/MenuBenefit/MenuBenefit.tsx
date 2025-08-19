import React from 'react'
import styles from './MenuBenefit.module.css'
import { Text } from '../text/text'

export const MenuBenefit: React.FC = () => {
  const benefits = [
    {
      icon: "🌿",
      title: "FRESH",
      subtitle: "Bowls made daily!",
      description: "strict NO re-use policy"
    },
    {
      icon: "💊",
      title: "VITAMIN",
      subtitle: "Everything is vitamin rich",
      description: "healthy body, healthy mind"
    },
    {
      icon: "🥤",
      title: "ORGANIC",
      subtitle: "No unanatural fertilizers used",
      description: "only natural mulch was used"
    }
  ]

  return (
    <div className={styles.menuBenefit}>
      <Text variant="h2" style={{ 
        color: 'white', 
        fontSize: 'clamp(20px, 3vw, 32px)', 
        marginBottom: '30px',
        fontWeight: 'bold'
      }}>
        WHY CHOSE US?
      </Text>
      
      <div className={styles.benefitGrid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{benefit.icon}</span>
            </div>
            <div className={styles.benefitContent}>
              <Text variant="h3" style={{ 
                color: 'white', 
                fontSize: 'clamp(14px, 2vw, 18px)', 
                fontWeight: 'bold',
                marginBottom: '5px'
              }}>
                {benefit.title}
              </Text>
              <Text variant="p" style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                marginBottom: '3px'
              }}>
                {benefit.subtitle}
              </Text>
              <Text variant="p" style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: 'clamp(12px, 1.5vw, 14px)'
              }}>
                {benefit.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuBenefit
import React from 'react'
import styles from './MenuBenefit.module.css'
import { Text } from '../text/text'

export const MenuBenefit: React.FC = () => {
  const benefits = [
    {
      icon: "🌿",
      title: "FRESH",
      subtitle: "Plus a thind un",
      description: "Sapiente opportunity"
    },
    {
      icon: "💊",
      title: "VITAMIN",
      subtitle: "Neque sunt",
      description: "dolours"
    },
    {
      icon: "🥤",
      title: "ORGANIC",
      subtitle: "Temporibus",
      description: "warnuts"
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
        OUR MENU BENEFIT
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
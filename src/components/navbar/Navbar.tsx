import React from 'react'
import { Text} from '../text/text'
import styles from './Navbar.module.css'
import { Containercontent } from '../Containercontent'
import mapfinal from '../../assets/map-final.png'
import cartfinal from '../../assets/cart-final.png'


export const Navbar: React.FC<any> = () => {
    
    
return (
  <nav>
    <div className={styles.content}>
      <Containercontent className={styles.content}>
        
        <div className={styles.logoContainer}>
          <img
            src="https://thumb.ac-illust.com/66/66b1fcb636a43ef47c08c1b0db3a6d14_t.jpeg"
            alt="company logo"
            className={styles.logo}
          />
          <Text variant="h2" style={{ margin: 0 }}>CodeTribe Shop</Text>
        </div>

        <div className={styles.links}>
            <div>
            <a href="/#" className={styles.link}>Menu</a>
            <a href="/#" className={styles.link}>Pages</a>
            <a href="/#" className={styles.link}>Blog</a>
            <a href="/#" className={styles.link}>Contact Us</a>
           </div>

            <div className={styles.buttonsorient}>
              <button className={styles.buttonCSS}>
                <img className = {styles.buttonCSS}
                src= {mapfinal}
                alt="map icon"
              />
              </button>
              <button className = {styles.buttonCSS}>
              <img
              className={styles.buttonCSS}
                src={cartfinal}
                alt="cart icon"
              />
            </button>
          </div>
        </div>

      </Containercontent>
    </div>
  </nav>
)}




            {/* 
            <div className={styles['profile-icon']}> 
              <Text variant="span" style={{ color: 'black' }}>U</Text>
            </div> 
            */}
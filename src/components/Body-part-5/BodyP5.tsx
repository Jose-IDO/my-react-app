import React from "react";
import styles from "./body-p5.module.css";
import { Containercontent } from "../Containercontent";
import { MenuBenefit } from "../MenuBenefit/MenuBenefit";
import { OpeningHours } from "../OpeningHours/OpeningHours";

export const BodyP5: React.FC = () => {
  return (
    <div className={styles.bodyP5Container}>
      <Containercontent className={styles.bodyP5}>
        <div className={styles.helloCard}>
          <div className={styles.cardContent}>
            <div className={styles.berryBackground}>
              {/* <img
                src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/refs/heads/production/src/assets/fruitbowl2.png"
                alt="Berry background"
                className={styles.backgroundImage}
              /> */}
            </div>
            <div className={styles.cardText}>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 48px)",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                HELLO.
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.footerContent}>
          <MenuBenefit />
          <OpeningHours />
        </div>
      </Containercontent>
    </div>
  );
};

export default BodyP5;

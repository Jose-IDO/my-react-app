import React from "react";
import styles from "./body-p5.module.css";
import { Containercontent } from "../Containercontent";
import { MenuBenefit } from "../MenuBenefit/MenuBenefit";
import { OpeningHours } from "../OpeningHours/OpeningHours";

export const BodyP5: React.FC = () => {
  return (
    <div className={styles.bodyP5Container}>
      <Containercontent className={styles.bodyP5}>
        <div className={styles.berryBackground}>
          <img
            src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/refs/heads/production/src/assets/cherries.png"
            alt="cherries"
          />

          <h2 className={styles.overlayTitle}>SUMMER SWEET.</h2>
        </div>

        <MenuBenefit />
        <OpeningHours />
      </Containercontent>
    </div>
  );
};

export default BodyP5;

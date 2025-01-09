// components/Growth/Growth.js

import styles from "./Growth.module.css";
import { growth } from "../../constants/growth"; // Assuming `growth` is your data source
import GrowthBox from "./GrowthBox";

const imgURL1 = "/banner.png"; // Replace with actual image path
const imgURL2 = "/banner.png"; // Replace with actual image path

const Growth = () => {
  return (
    <div className={`${styles.growthWrapper} center`}>
      <div className={`${styles.growthWrapperInner} center`}>
        <div className={styles.growthHeading}>
          <p>Choose idown for downloading from Instagram</p>
        </div>
        <div className={styles.growthImg}>
          <img className={styles.img1} src={imgURL1} alt="Banner 1" />
          <img className={styles.img2} src={imgURL2} alt="Banner 2" />
        </div>
        <div className={`${styles.growthList} center`}>
          {growth.map(({ field, description }, index) => (
            <GrowthBox key={index} field={field} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Growth;

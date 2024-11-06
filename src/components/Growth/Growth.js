import styles from "./Growth.module.css";
import { growth } from "../../constants/growth";
import GrowthBox from "./GrowthBox";

const imgURL1 =
  "/banner.png";
const imgURL2 =
  "/banner.png";

const Growth = () => {
  return (
    <div className={`${styles.growthWrapper} center`}>
      <div className={`${styles.growthWrapperInner} center`}>
        <div className={styles.growthHeading}>
          <p>Choose idown for download from Instagram</p>
        </div>
        <div className={styles.growthImg}>
          <img className={styles.img1} src={imgURL1} alt="" />
          <img className={styles.img2} src={imgURL2} alt="" />
        </div>
        <div className={`${styles.growthList} center`}>
          {growth.map(({ field, description }) => {
            return <GrowthBox field={field} description={description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Growth;

import { Fragment } from "react";
import styles from "./Features.module.css";
import { features } from "../../constants/features";

const Features = () => {
  return (
    <div className={`${styles.featuresWrapper} center`}>
      <div className={styles.featuresHeading}>
        <h2>Instagram video downloader</h2>
        <p>How to use Instagram video downloader?</p>
      </div>
      <div className={`${styles.featuresListWrapper} center`}>
        <div className={`${styles.featuresList} center`}>
          {features.map(({ feature, description, image }) => {
            return (
              <div className={`${styles.featureDiv} center`}>
                <Fragment>
                  <div className={styles.feature}>
                    <p>{feature}</p>
                  </div>
                  <div className={styles.featureDescription}>
                    <p>{description}</p>
                  </div>
                  <div>
                    <img className={styles.featureImg} src={image} alt="img" />
                  </div>
                </Fragment>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button className={styles.shopBtn}>Start shopping</button> */}
    </div>
  );
};

export default Features;

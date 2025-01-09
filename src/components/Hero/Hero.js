import React, { useState } from "react";
import services from "./../../services";
import styles from "./Hero.module.css";
import { DisplayVideo } from "./../DisplayVideo/DisplayVideo";

const Hero = () => {

  const [url, setUrl] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setVideoLink("");

    // Validate the URL
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL.");
      setIsLoading(false);
      return;
    }

    const response = await services.getVideoDownloadUrl(url);
    if (response.error) {
      console.log("error");
      setError("Oops. We couldn't get that video. Sorry!");
      setIsLoading(false);
    } else {
      setVideoLink(response.downloadLink);
      setUrl(""); // Clear the input field after success
      setIsLoading(false);
    }
  };


  return (
    <div>
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h1 className={styles.headerText}>
          Instagram Downloader
        </h1>
        <div className={styles.slogan}>
          <p>Copy the instagram video URL and paste it below</p>
        </div>
        {error ? (
        <div className={styles.errorWrapper}>
          <div className={styles.errorDiv}>{error}</div>
        </div>
      ) : (
        ""
      )}
        <form className="videoToDownload" onSubmit={e => handleSubmit(e)}>
        <div className={styles.inputLocation}>
          <input type="text" onChange={e => setUrl(e.target.value)} name="url"
          value={url} placeholder="Enter Ig video url here.." />
        </div>
        <div>
          <button type="submit" className={styles.dnldBtn}>
            Get video
          </button>
        </div>
        </form>
        {isLoading ? (
        <svg className={styles.spinner} viewBox="0 0 50 50">
          <circle
            className={styles.path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      ) : (
        ""
      )}
      </div>
    </div>
    {videoLink ? (
        <div className={styles.saveInstructionWrapper}>
          <div className={styles.saveInstruction}>
            {" "}
            Click on the <strong>'Download video'</strong> to
            save the video.{" "}
          </div>
        </div>
      ) : (
        ""
      )}
      {videoLink ? <DisplayVideo videoLink={videoLink} /> : ""}
    </div>
  );
};
export default Hero;

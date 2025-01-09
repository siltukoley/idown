'use client'; // Ensure this file is treated as a client-side component

import React, { useState, useEffect } from "react";
import styles from "./DisplayVideo.module.css"; // Correctly import the CSS module

export const DisplayVideo = ({ videoLink }) => {
  const [videoToShow, setVideoToShow] = useState("");

  useEffect(() => {
    if (videoLink) {
      setVideoToShow(videoLink);
    }
  }, [videoLink]);

  const handleDownload = async (videoUrl) => {
    const response = await fetch(videoUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'video.mp4'; // Set the default filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className={styles.videoDiv}>
      {videoToShow ? (
        <>
          <video
            controls
            src={videoToShow}
            type="video/mp4"
            className={styles.videoBox}
          />
          <div>
            <button 
              onClick={() => handleDownload(videoToShow)} 
              className={styles.downloadButton}
            >
              Download Video
            </button>
          </div>
        </>
      ) : (
        <p>Loading video...</p> // Show loading message if video is not ready yet
      )}
    </div>
  );
};

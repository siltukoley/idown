import React, { useState, useEffect } from "react";
import "./DisplayVideo.css";

export const DisplayVideo = videoLink => {
  const [videoToShow, setVideoToShow] = useState("");

  useEffect(() => {
    setVideoToShow(videoLink);
    return () => {};
  }, [videoLink, videoToShow]);

  const handleDownload = async(videoUrl) => {
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
    <div className="videoDiv">
      <video
        controls
        src={videoToShow.videoLink}
        type="video/mp4"
        className="videoBox"
      ></video>
      <div>
      <button onClick={() => handleDownload(videoToShow.videoLink)} className="downloadButton">
          Download Video
        </button>
      </div>
    </div>
  );
};

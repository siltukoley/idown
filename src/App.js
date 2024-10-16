import React, { useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import services from "./services";
import { DisplayVideo } from "./DisplayVideo";
import "./App.scss";

function App() {
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
    <div className="App">

      <Helmet>
        <title>Instagram Video Downloader</title>
        <meta name="description" content="Download any video from Instagram easily. Just paste the video URL to get started." />
        <meta name="keywords" content="Instagram, Video Downloader, Download Videos, Instagram Video" />
        <meta name="author" content="idown.in" />
      </Helmet>

      <div className="headers">
        <h1>Download any video from Instagram</h1>
        <p>Copy the instagram video URL and paste it below</p>
      </div>
      {error ? (
        <div className="errorWrapper">
          <div className="errorDiv">{error}</div>
        </div>
      ) : (
        ""
      )}

      <form className="videoToDownload" onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => setUrl(e.target.value)}
          type="text"
          name="url"
          value={url}
          className="inputBar"
          placeholder="enter an ig video url here.."
        ></input>
        <div>
          <button type="submit" className="getVideoBtn">
            Get video
          </button>
        </div>
      </form>
      {isLoading ? (
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
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

      {videoLink ? (
        <div className="saveInstructionWrapper">
          <div className="saveInstruction">
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
}

export default App;

import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./index.css"; // Import the CSS file

const videos = [
  "https://youtu.be/qT_am9p4UpU?si=NC6Cl2npBMqBMBtS",
  "https://youtu.be/Z6LZ9J6E4Xg?si=C_hloUEPFdEvE3dD",
  "https://youtu.be/3ov31OmKzjk?si=gfsLqwLWIRCAoTG6"
];

const VideoTour = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePause = () => {
    setPlayingIndex(null); // Pause all videos if clicking elsewhere or outside a video
  };

  const handleVideoClick = (index) => {
    setPlayingIndex(index); // Start playing the clicked video
  };

  return (
    <div className="video-tour">
      <h1 className="video-tour-head">VIDEO TOUR WITH EXPLORERS</h1>
      <div className="video-tour-container">
        {videos.map((video, index) => (
          <div key={index} className={`video-wrapper ${playingIndex === index ? 'show' : 'show'}`}>
            <div className="styled-react-player" onClick={() => handleVideoClick(index)}>
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                playing={playingIndex === index}
                controls={true} // Show controls for each video
                onPause={handlePause}
                muted={false} // Allow videos to play with sound
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 0, // Autoplay disabled initially
                    },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTour;

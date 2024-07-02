import React from "react";
import YouTube from "react-youtube";

const VideoGallery = () => {
  // Iframe Videos
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0, // Hide video controls
      disablekb: 1, // Disable keyboard controls
      fs: 0, // Hide fullscreen button
      rel: 0, // Don't show related videos at the end
      showinfo: 0, // Hide video title and uploader information
    },
  };

  return (
    <div>
      <div className="videoGallery">
        <div className="blogItemsSection">
          <div className="videoGalleryHead">
            <h2>Video Gallery</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="blogItemBox">
                <div className="blogItemImg">
                  <YouTube
                    className="videotag"
                    videoId="HYxNhUQwcOw"
                    opts={opts}
                  />
                </div>
                <div className="blogItemText">
                  <h4>Ganesh Chaturthi</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blogItemBox">
                <div className="blogItemImg">
                  <YouTube
                    className="videotag"
                    videoId="sSJmq_W4dC8"
                    opts={opts}
                  />
                </div>
                <div className="blogItemText">
                  <h4>Activity</h4>
                </div>
              </div>
            </div>

            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;

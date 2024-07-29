import React from "react";
import YouTube from "react-youtube";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const VideoGallery = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
        description:
          `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
    keywords:
      "Language Development, Motor Skills Development, Art and Craft Activities",
  };

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
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
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
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default VideoGallery;

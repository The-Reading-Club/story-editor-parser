import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div style={videoResponsive}>
    <iframe
      style={videoResponsiveiFrame}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

// const divStyle = {
//     margin: '40px',
//     border: '5px solid pink'
//   };
//   const pStyle = {
//     fontSize: '15px',
//     textAlign: 'center'
//   };

const videoResponsive: React.CSSProperties = {
  overflow: "hidden",
  paddingBottom: "56.25%",
  position: "relative",
  height: 0,
};

const videoResponsiveiFrame: React.CSSProperties = {
  left: 0,
  top: 0,
  height: "25%",
  width: "25%",
  position: "absolute",
};

// https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
// https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

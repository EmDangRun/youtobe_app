import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
export default class Video extends React.Component {
  render() {
    var videoSrc =
      "https://www.youtube.com/embed/" +
      this.props.video +
      "?autoplay=" +
      this.props.autoplay +
      "&rel=" +
      this.props.rel +
      "&modestbranding=" +
      this.props.modest;
    return (
      <div className="container">
        <iframe
          className="player"
          height="650px"
          type="text/html"
          width="100%"
          src={videoSrc}
          allowFullScreen="allowFullScreen"
          frameBorder="1"
        />
      </div>
    );
  }
}

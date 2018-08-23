import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
export default class Song extends React.Component {
  render() {
    const { song } = this.props;
    return (
      <div className="box_song">
        <div className="image_song">
          <Link to={`/${song.id}`}>
            <img src={song.imgUrl} alt="" />
          </Link>
        </div>
        <div className="info_song">
          <div className="name_song">
            <Link to={`/${song.id}`}>{song.name_song}</Link>
          </div>
          <div className="byline">Audio Library</div>
          <div className="metadata_line">{song.view}</div>
        </div>
      </div>
    );
  }
}

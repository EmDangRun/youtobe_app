import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Video, Song } from "../components";
import YouTube from "react-youtube";
const data = [
  {
    id: "f54vuMZDsBg",
    name_song: "River Flows In You",
    views: "8M",
    imgUrl:
      "https://i.ytimg.com/vi/nFuv-Rm932s/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC25MYkQPsdfo_O8TLbDs5-ly0byA"
  },
  {
    id: "gqlJInFQAhU",
    name_song: "BIGBANG - Haru Haru || Piano Cover",
    views: "7M",
    imgUrl:
      "https://i.ytimg.com/vi/gqlJInFQAhU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB9guig_KwPKFJUrrS8oI9GlaHbiQ"
  },
  {
    id: "MkNeIUgNPQ8",
    name_song: "Adventure SoundCloud",
    views: "6M",
    imgUrl:
      "https://i.ytimg.com/vi/X5mcY8ecs8I/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAxeh32j5pNoJe9tBqzON092Euz7g"
  },
  {
    id: "FlY_ei-FnGY",
    name_song: "Finding Hope - Without You (Lyric Video) feat. Holly Drummond",
    views: "14M",
    imgUrl:
      "https://i.ytimg.com/vi/FlY_ei-FnGY/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBsdfItT0EAl4dE1TA3t7-GV_CO-w"
  }
];
export default class YoutobePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    const opts = {
      height: "650",
      width: "100%",
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <Fragment>
        <main>
          <div className="meida">
            <div className="container_media">
              <div className="video">
                <YouTube videoId={match.params.id} opts={opts} />
              </div>
            </div>
          </div>
          <div className="side_media">
            <div className="container_side_media">
              {data.map(element => {
                return <Song key={element.id} song={element} />;
              })}
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

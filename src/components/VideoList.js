import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  var { videos, onVideoSelect } = props;
  var renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;

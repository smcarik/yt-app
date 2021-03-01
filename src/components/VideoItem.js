import "./VideoItem.css";
import React from "react";

function VideoItem(props) {
  const { video, onVideoSelect } = props;
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;

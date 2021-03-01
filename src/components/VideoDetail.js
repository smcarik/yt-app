import React from "react";

function VideoDetail(props) {
  var { video } = props;
  if (!video) return <div>No Video selected</div>;

  var videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;

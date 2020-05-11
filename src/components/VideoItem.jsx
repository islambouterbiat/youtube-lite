import React from "react";

function VideoItem({ video }) {
  return (
    <div className="card">
      <div className="card-body d-flex align-items-center">
        <img
          className="m-auto"
          width="80%"
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="mb-2 mt-1">
          <h6 className="card-text m-0">{video.snippet.channelTitle}</h6>
          <p className="card-text ml-1"> {video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;

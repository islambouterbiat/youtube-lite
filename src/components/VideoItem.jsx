import React from "react";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="card clickableCard" onClick={() => onVideoSelect(video)}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="mcard-img"
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="mb-2 mt-1">
              <p className="card-title ml-1"> {video.snippet.title}</p>
              <p className="card-text m-0">{video.snippet.channelTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;

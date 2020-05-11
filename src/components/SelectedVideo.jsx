import React from "react";

function SelectedVideo({ video }) {
  if (!video) return <div>Search for videos ...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="card">
      <div className="card-body">
        <iframe
          className="m-auto"
          height="100%"
          width="100%"
          title="video Player"
          src={videoSrc}
        />
        <div className="d-flex align-items-center mb-2 mt-1">
          <h6 className="card-text m-0">{video.snippet.channelTitle} |</h6>
          <p className="card-text ml-1"> {video.snippet.title}</p>
        </div>
        <p className="card-text">Description : {video.snippet.description} </p>
      </div>
    </div>
  );
}

export default SelectedVideo;

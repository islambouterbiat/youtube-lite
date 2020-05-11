import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, i) => (
        <VideoItem key={i} video={video} />
      ))}
    </div>
  );
}

export default VideoList;

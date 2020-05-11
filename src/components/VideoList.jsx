import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos,onVideoSelect }) {
  return (
    <div>
      {videos.map((video, i) => (
        <VideoItem key={i} video={video} onVideoSelect={onVideoSelect}  />
      ))}
    </div>
  );
}

export default VideoList;

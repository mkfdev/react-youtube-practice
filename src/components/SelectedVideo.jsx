import React from "react";
import VideoView from "./VideoView";
import RelatedVideo from "./RelatedVideo";

const SelectedVideo = ({ selectedId, videos, onSelectVideo }) => {
  return (
    <div className="select-area">
      <VideoView selectedId={selectedId}/>
      <RelatedVideo 
        videos={videos}
        onSelectVideo={onSelectVideo}
      />
    </div>
  )
}

export default SelectedVideo;
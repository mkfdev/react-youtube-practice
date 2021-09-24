import React from "react";
import VideoItem from "../videoItem/videoItem";
import styles from "./videoList.module.css";

const VideoList = ({ videos, display, handleSelectVideo }) => (
  <ul className={`${styles.list}`}>
    {
      videos.map(video => (
        <VideoItem key={video.id} video={video} display={display} handleSelectVideo={handleSelectVideo} />
      ))
    }
  </ul>
);

export default VideoList;
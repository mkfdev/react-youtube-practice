import React from "react";
import VideoItem from "./videoItem";
import styles from "../styles/videoList.module.css";

const VideoList = ({ videos }) => (
  <ul className={styles.list}>
    {
      videos.map(video => (
        <VideoItem key={video.id} video={video} />
      ))
    }
  </ul>
);

export default VideoList;
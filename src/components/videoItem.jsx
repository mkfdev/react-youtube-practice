import React from "react";
import styles from "../styles/videoItem.module.css"

const VideoItem = ({ video }) => (
   <li className={styles.item}>
     <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail"/>
     <div className={styles.metadata}>
       <p className={styles.title}>{video.snippet.title}</p>
       <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
     </div>
   </li>
);

export default VideoItem
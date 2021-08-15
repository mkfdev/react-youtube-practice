import React, { memo } from "react";
import styles from "../styles/videoItem.module.css"

const VideoItem = memo(({ video, display, handleSelectVideo }) => {
    const displayType = (display === 'row') ? styles.row : styles.column;
    return (
      <li className={`${styles.item} ${displayType}`} onClick={() => handleSelectVideo(video)}>
        <div className={styles.video}>
          <img className={styles.thumbnails} src={video.snippet.thumbnails.medium.url} alt="video thumbnail"/>
          <div className={styles.metadata}>
            <p className={styles.title}>{video.snippet.title}</p>
            <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }  
);
export default VideoItem;
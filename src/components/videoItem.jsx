import React, { memo } from "react";
import styles from "../styles/videoItem.module.css";
import decode from "unescape";

const VideoItem = memo(({ video, display, handleSelectVideo }) => {
    const displayType = (display === 'row') ? styles.row : styles.column;

    const decodeTitle = title => {
      return decode(title);
    };
    return (
      <li className={`${styles.item} ${displayType}`} onClick={() => handleSelectVideo(video)}>
        <div className={styles.video}>
          <img className={styles.thumbnails} src={video.snippet.thumbnails.medium.url} alt="video thumbnail"/>
          <div className={styles.metadata}>
            <p className={styles.title}>{decodeTitle(video.snippet.title)}</p>
            <p className={styles.channelTitle}>{decodeTitle(video.snippet.channelTitle)}</p>
          </div>
        </div>
      </li>
    );
  }  
);
export default VideoItem;
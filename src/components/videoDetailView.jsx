import React from "react";
import styles from '../styles/videoDetailView.module.css';
import decode from "unescape";

const VideoDetailView = ({video}) => {
  const decodeChar = title => {
    return decode(title);
  };
  
  return (
    <section className={styles.detail}>
      <iframe className={styles.video} 
              type="text/html" 
              width="100%" height="405"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="video"
              frameBorder="0" allowFullScreen>
      </iframe>
      
      <h2 className={styles.title}>{decodeChar(video.snippet.title)}</h2>
      <h3 className={styles.channelTitle}>{decodeChar(video.snippet.channelTitle)}</h3>
      <p className={styles.description}>{video.snippet.description}</p>
    </section>
  );
  
}

export default VideoDetailView;
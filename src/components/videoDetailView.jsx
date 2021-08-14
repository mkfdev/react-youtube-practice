import React from "react";
import styles from '../styles/videoDetailView.module.css';

const VideoDetailView = ({video}) => (
  <section className={styles.detail}>
    <iframe className={styles.video} 
            type="text/html" 
            width="100%" height="405"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="video"
            frameBorder="0" allowFullScreen>
    </iframe>

    <div className={styles.time}>{video.snippet.publishTime}</div>
    <h2 className={styles.title}>{video.snippet.title}</h2>
    <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
    <p className={styles.description}>{video.snippet.description}</p>
  </section>
)

export default VideoDetailView;
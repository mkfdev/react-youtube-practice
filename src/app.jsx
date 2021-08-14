import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList';
import styles from './app.module.css';
import VideoHeader from './components/videoHeader';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);

  const searchVideo = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };
  
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube])
  
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <VideoHeader onSearch={searchVideo}/>
        <VideoList videos={videos}/>
      </div>
    </div>
  );
}

export default App;
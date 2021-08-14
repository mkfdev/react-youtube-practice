import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList';
import styles from './app.module.css';
import VideoHeader from './components/videoHeader';
import VideoDetailView from './components/videoDetailView';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchVideo = query => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };
  
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube])
  
  const handleSelectVideo = video => {
    setSelectedVideo(video);
  };
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <VideoHeader onSearch={searchVideo}/>
        <div className={styles.content}>
          {
            selectedVideo && <VideoDetailView video={selectedVideo}/>
          }
          <VideoList 
            videos={videos}
            display={selectedVideo ? 'row' : 'column'}
            handleSelectVideo={handleSelectVideo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
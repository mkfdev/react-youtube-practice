import React, { useCallback, useEffect, useState } from 'react';
import VideoList from './components/videoList';
import styles from './app.module.css';
import VideoHeader from './components/videoHeader';
import VideoDetailView from './components/videoDetailView';
import { useHistory } from 'react-router';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  const goHome = () => {
    setSelectedVideo(null);
    history.push('/');
  };

  const searchVideo = useCallback(query => {
    setLoading(true);
    youtube 
      .search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
        setLoading(false);
      });
  }, [youtube]);
  
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    return () => {
      history.push('/');
    }
  }, [videos, history]);
  
  const handleSelectVideo = video => {
    setSelectedVideo(video);
    history.push(`/detail/${video.id}`);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <VideoHeader onSearch={searchVideo} goHome={goHome}/>
        <div className={styles.content}>
          {
            selectedVideo && <VideoDetailView video={selectedVideo}/>
          }
          {
            loading &&
            <div className={`fa-5x ${styles.loading}`}>
              <i className="fas fa-spinner fa-spin"></i>
            </div>
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
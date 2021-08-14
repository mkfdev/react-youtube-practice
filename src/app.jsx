import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList';
import styles from './app.module.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAKwAAQxlZ3fzxMKZgkxHGjKoBsb6w0_oA", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <VideoList videos={videos}/>
      </div>
    </div>
  );
}

export default App;
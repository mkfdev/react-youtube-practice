import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList';
import styles from './app.module.css';
import VideoHeader from './components/videoHeader';

const App = () => {
  const [videos, setVideos] = useState([]);

  const searchVideo = query => {
    console.log(`result: ${query}!!`);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAKwAAQxlZ3fzxMKZgkxHGjKoBsb6w0_oA`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };
  
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
        <VideoHeader onSearch={searchVideo}/>
        <VideoList videos={videos}/>
      </div>
    </div>
  );
}

export default App;
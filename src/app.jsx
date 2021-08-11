import React, { useEffect, useRef, useState } from 'react'
import SearchBar from './components/SearchBar';
import VideoArea from './components/VideoArea';
import './app.css';
import SelectedVideo from './components/SelectedVideo';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [query, setQuery] = useState('');
  const mounted = useRef(false);

  const handleSelectVideo = (id) => {
    console.log(`id ${id}`);
    const selectedId = id;
    setSelectedId(selectedId);
  };

  const getQuery = (q) => {
    setQuery(q);
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

      console.log(videos);
  }, [])

  useEffect(() => {
    if(!mounted.current) {
      mounted.current = true;
    } else {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyAKwAAQxlZ3fzxMKZgkxHGjKoBsb6w0_oA`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setVideos(result.items);
        })
        .catch(error => console.log('error', error));
    }
  }, [query])

  return (
    <div className="youtube">
      <SearchBar getQuery={getQuery}/>

      { selectedId ?
       (<SelectedVideo 
         videos={videos}
         selectedId={selectedId}
         onSelectVideo={handleSelectVideo}
         />
        ) :
       (<VideoArea 
          videos={videos}
          onSelectVideo={handleSelectVideo}
        />
       )
      }
    </div>
  )
}

export default App;
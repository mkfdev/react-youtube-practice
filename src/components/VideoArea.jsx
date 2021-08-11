import React from 'react';
import VideoList from './VideoList';

const VideoArea = ({ videos, onSelectVideo }) => {
  return (
    <div className="videos">
      <ul className="video-list">
        {
          videos.map((item) => {
            return <VideoList
                    item={item}
                    key={item.etag}
                    id={item.id}
                    title={item.snippet.title}
                    channelTitle={item.snippet.channelTitle}
                    thumbURL={item.snippet.thumbnails.high.url}
                    onSelectVideo={onSelectVideo}
                  />
          })
        }
      </ul>
    </div>
  )
}

export default VideoArea;
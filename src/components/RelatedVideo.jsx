import React from "react";

const RelatedVideo = ({ videos, onSelectVideo }) => {

  return (
    <div className="aside-video">
      <ul>
        {
          videos.map(video => {
            return <li key={video.etag} onClick={onSelectVideo(video.id)}>
              <span className="rel-video-img"><img src={`${video.snippet.thumbnails.high.url}`} alt={video.snippet.title}></img></span>
              <div className="rel-video-info">
                <strong>{video.snippet.title}</strong>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default RelatedVideo;
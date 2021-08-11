import React from "react";

const VideoList = ({ item, id, title, channelTitle, thumbURL, onSelectVideo }) => {
  console.log('item', item);//item.id.videoId
  const onClickVideo = () => {
    onSelectVideo(id);
  }
  return (
    <li onClick={onClickVideo}>
      <span className="video-img"><img src={thumbURL} alt={`${title}`}/></span>
      <div className="video-desc">
        <strong className="title">{title}</strong>
        <span className="channel-title">{channelTitle}</span>
      </div>
    </li>
  );
}

export default VideoList;
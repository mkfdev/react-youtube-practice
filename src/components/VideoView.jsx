import React from "react"

const VideoView = ({selectedId}) => {
    return (
        <div className="video-player">
          <iframe id="player" 
                  type="text/html" 
                  width="640" height="360"
                  src={`http://www.youtube.com/embed/${selectedId}?enablejsapi=1&origin=http://example.com`}
                  frameBorder="0"></iframe>
        </div>
    )
}

export default VideoView
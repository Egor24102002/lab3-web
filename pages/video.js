// pages/video.js
import React from 'react';
import YouTube from 'react-youtube';

const VideoPage = () => {
    // ID вашего видео на YouTube
    const videoId = 'anlYhxCbxYg';

    return (
        <div>
            <h1>Видео с YouTube</h1>
            <YouTube videoId={videoId} />
        </div>
    );
};

export default VideoPage;

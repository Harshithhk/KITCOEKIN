import React, { useEffect } from 'react';

const YouTubePlayer = () => {
  useEffect(() => {
    // This function creates and initializes the YouTube player
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'VIDEO_ID', // Replace with the actual YouTube video ID
        width: 600,
        height: 400,
      });
    };

    // Load the YouTube Player API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  return <div id="youtube-player"></div>;
};

export default YouTubePlayer;

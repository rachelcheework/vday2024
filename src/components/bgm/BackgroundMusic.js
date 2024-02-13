import React, { useState, useEffect } from 'react';
import BGM from '../bgm/website_bgm.mp3';

import '../bgm/BackgroundMusic.css';

const BackgroundMusic = () => {
  const [audio] = useState(new Audio(BGM));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Initial volume

  useEffect(() => {
    audio.loop = true;
    audio.volume = volume; // Set initial volume
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [audio, isPlaying, volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

//   const handleVolumeChange = (e) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
//   };

  return (
    <div className='bgm'>
      <button className='music-button' onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      {/* <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
      /> */}
    </div>
  );
};

export default BackgroundMusic;

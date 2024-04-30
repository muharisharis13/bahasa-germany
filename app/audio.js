import { useState, useRef } from 'react';

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);

  const url = 'musik.mp3';

  const audioRef = useRef(new Audio(url));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: 'none',
        }}
        onClick={playing ? pause : play}
      >
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default AudioPlayer;
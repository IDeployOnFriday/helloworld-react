import VisuallyHidden from './VisuallyHidden';
import { Play } from 'react-feather';
import React from "react";

function MediaPlayer({ src }: { src: string }) {
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    return (
    <div className="wrapper">
      <div className="media-player">
        <img alt="" src="https://sandpack-bundler.vercel.app/img/take-it-easy.png" />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button
            onClick={() => {
                console.log("audioRef.current", audioRef.current)
                if  (audioRef.current) {
                    console.log("start song ")
                    audioRef.current.play();
                }
            }}
        >
          <Play />
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

          <audio ref={audioRef} src={src} />
      </div>
    </div>
  );
}

export default MediaPlayer;
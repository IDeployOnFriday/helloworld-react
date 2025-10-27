import VisuallyHidden from './VisuallyHidden';
import {Pause, Play} from 'react-feather';
import React from "react";

function MediaPlayer({ src }: { src: string }) {
    const audioRef = React.useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false)
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

                if  (audioRef.current) {

                    if (isPlaying) {
                        audioRef.current.pause();
                    } else {
                        audioRef.current.play();
                    }
                    setIsPlaying(!isPlaying)
                }
            }}
        >
            {isPlaying ? <Pause/> :<Play /> }
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

          <audio
              ref={audioRef}
              src={src}
              onEnded={() => {
                  setIsPlaying(false);
              }}
          />
      </div>
    </div>
  );
}

export default MediaPlayer;
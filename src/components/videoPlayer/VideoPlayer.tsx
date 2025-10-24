import React from 'react';

function VideoPlayer({ src, caption }: { src: string; caption: string }) {
    const playbackRateSelectId = React.useId();

    const videoRef = React.useRef<HTMLVideoElement | null>(null);

    return (
        <div className="video-player">
            <figure>
                <video
                    ref={videoRef}
                    controls
                    src={src}
                />
                <figcaption>
                    {caption}
                </figcaption>
            </figure>

            <div className="actions">
                <label htmlFor={playbackRateSelectId}>
                    Select playback speed:
                </label>
                <select
                    id={playbackRateSelectId}
                    defaultValue="1"
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        const rate = parseFloat(event.target.value);
                        if (videoRef.current && !Number.isNaN(rate)) {
                            videoRef.current.playbackRate = rate;
                        }
                    }}
                >
                    <option value="0.5">0.5</option>
                    <option value="1">1</option>
                    <option value="1.25">1.25</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
    );
}

export default VideoPlayer;
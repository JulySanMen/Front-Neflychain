import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { MovieContext } from '../../contexts/MovieContext';

const MoviePlayer: React.FC = () => {
  const { currentMovie, currentServer } = useContext(MovieContext);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayer>(null);
  
  useEffect(() => {
    // Reset played progress when movie changes
    setPlayed(0);
    setPlaying(false);
  }, [currentMovie, currentServer]);
  
  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    setMuted(parseFloat(e.target.value) === 0);
  };
  
  const handleToggleMute = () => {
    setMuted(!muted);
  };
  
  const handleProgress = (state: { played: number; loaded: number }) => {
    if (!seeking) {
      setPlayed(state.played);
      setLoaded(state.loaded);
    }
  };
  
  const handleDuration = (duration: number) => {
    setDuration(duration);
  };
  
  const [seeking, setSeeking] = useState(false);
  
  const handleSeekMouseDown = () => {
    setSeeking(true);
  };
  
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };
  
  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setSeeking(false);
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat((e.target as HTMLInputElement).value));
    }
  };
  
  const handleFullscreenToggle = () => {
    if (!fullscreen) {
      if (playerContainerRef.current?.requestFullscreen) {
        playerContainerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setFullscreen(!fullscreen);
  };
  
  // Format time display (e.g., 1:23)
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    
    const date = new Date(seconds * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const secondsOnly = date.getUTCSeconds();
    
    if (hours) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secondsOnly.toString().padStart(2, '0')}`;
    }
    
    return `${minutes}:${secondsOnly.toString().padStart(2, '0')}`;
  };
  
  if (!currentMovie) {
    return null;
  }
  
  return (
    <div 
      ref={playerContainerRef}
      className="bg-black rounded-xl overflow-hidden relative group"
    >
      <div className="aspect-w-16 aspect-h-9 w-full">
        <ReactPlayer
          ref={playerRef}
          url={currentMovie.servers[currentServer].url}
          width="100%"
          height="100%"
          playing={playing}
          volume={volume}
          muted={muted}
          onProgress={handleProgress}
          onDuration={handleDuration}
          progressInterval={500}
          className="react-player"
        />
      </div>
      
      {/* Custom controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {/* Title overlay at the top */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent">
          <h3 className="text-white text-lg font-medium">{currentMovie.title}</h3>
        </div>
        
        {/* Progress bar */}
        <div className="flex items-center mb-2">
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className="w-full accent-blue-500 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
        </div>
        
        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause button */}
            <button 
              onClick={handlePlayPause}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {playing ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            {/* Volume controls */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleToggleMute}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {muted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 accent-blue-500 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer md:w-24 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
              />
            </div>
            
            {/* Time display */}
            <div className="text-white text-xs md:text-sm">
              {formatTime(duration * played)} / {formatTime(duration)}
            </div>
          </div>
          
          {/* Fullscreen button */}
          <button 
            onClick={handleFullscreenToggle}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {fullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;
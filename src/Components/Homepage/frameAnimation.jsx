import React, { useEffect, useState } from 'react';

// Helper: import and sort images numerically
function importAll(r) {
  return r
    .keys()
    .map((key) => ({
      src: r(key),
      number: parseInt(key.match(/\d+/)?.[0], 10) || 0,
    }))
    .sort((a, b) => a.number - b.number)
    .map((item) => item.src);
}

// Load all frames from the folder
const frameModules = import.meta.glob('../../assets/frames/*.{png,jpg,jpeg,svg}', { eager: true });

// Convert to sorted array by number in filename
const frames = Object.entries(frameModules)
  .map(([path, mod]) => ({
    src: mod.default,
    number: parseInt(path.match(/\d+/)?.[0], 10) || 0,
  }))
  .sort((a, b) => a.number - b.number)
  .map((item) => item.src);
  
const FrameAnimation = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const FRAME_DURATION = 1000 / 24; // ~41.66ms per frame

  useEffect(() => {
    if (frames.length === 0) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, FRAME_DURATION);

    return () => clearInterval(interval);
  }, []);

  if (frames.length === 0) return null;

  return (
    <img
      src={frames[frameIndex]}
      alt={`frame-${frameIndex}`}
      style={{ width: '370px', height: 'auto' }}
    />
  );
};

export default FrameAnimation;

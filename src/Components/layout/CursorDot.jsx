import { useEffect } from 'react';

const CursorDot = () => {
  useEffect(() => {
    const dot = document.createElement('div');
    dot.id = 'cursor-dot';
    document.body.appendChild(dot);

    const move = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      document.body.removeChild(dot);
    };
  }, []);

  return null;
};

export default CursorDot;

import { VideoData } from '@/src/sources/types';
import { JSX, useState } from 'react';

interface Props {
  videos: VideoData[];
  renderItem: (video: VideoData) => JSX.Element;
}

export const Slider = ({ videos, renderItem }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <button onClick={prevSlide}>Prev</button>

      {renderItem(videos[currentIndex])}

      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

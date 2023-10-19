import { useState, useEffect } from 'react';

export const useLastHoveredImage = (_defaultImage: string | null) => {
  const [lastHoveredImage, setLastHoveredImage] = useState<string | null>(
    _defaultImage
  );
  const [currentlyHoveredImage, setCurrentlyHoveredImage] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (currentlyHoveredImage !== null) {
      const timer = setTimeout(() => {
        setLastHoveredImage(currentlyHoveredImage);
      }, 0); // Delay equivalent to your transition duration

      return () => clearTimeout(timer);
    }
    return () => {};
  }, [currentlyHoveredImage]);

  const handleHover = (imageSrc: string) => {
    setCurrentlyHoveredImage(imageSrc);
  };

  const handleMouseLeave = () => {
    setCurrentlyHoveredImage(null);
  };

  return {
    lastHoveredImage,
    handleHover,
    handleMouseLeave,
    currentlyHoveredImage,
  };
};

import { useCallback, useEffect, useState } from 'react';

interface UseItemsInViewport {
  /* @example
    <Accordion
    isLeftVisible={!imagesInViewPort.includes(0)}
    isRightVisible={!imagesInViewPort.includes(collection.length - 1)}
    > */
  isItemInView: (index: number) => boolean;
  isFirstItemInView: boolean;
  isLastItemInView: boolean;

  /* @example
    <motion.div
    onViewportEnter={() => updateImagesInViewPort(index, true)}
    onViewportLeave={() => updateImagesInViewPort(index, false)} */
  updateImagesInViewPort: (index: number, entering: boolean) => void;
}

export const useItemsInViewport = (
  collectionLength: number
): UseItemsInViewport => {
  const [imagesInViewPort, setImagesInViewPort] = useState<Set<number>>(
    new Set()
  );
  const [isFirstItemInView, setIsFirstItemInView] = useState<boolean>(false);
  const [isLastItemInView, setIsLastItemInView] = useState<boolean>(false);

  const updateImagesInViewPort = (index: number, entering: boolean) => {
    setImagesInViewPort((prevImages) => {
      const newImages = new Set(prevImages);
      if (entering) {
        newImages.add(index);
      } else {
        newImages.delete(index);
      }
      return newImages;
    });
  };

  const isItemInView = useCallback(
    (index: number) => imagesInViewPort.has(index),
    [imagesInViewPort]
  );

  // Update values in an effect that depends on `imagesInViewPort`
  useEffect(() => {
    setIsFirstItemInView(isItemInView(0));
    setIsLastItemInView(isItemInView(collectionLength - 1));
  }, [imagesInViewPort, isItemInView, collectionLength]);

  return {
    isItemInView,
    isFirstItemInView,
    isLastItemInView,
    updateImagesInViewPort,
  };
};

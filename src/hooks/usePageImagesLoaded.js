// hooks/usePageImagesLoaded.ts
import { useState, useEffect } from "react";

export function usePageImagesLoaded() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    if (images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;

    const onLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        onLoad();
      } else {
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad); // just in case
      }
    });
  }, []);

  return imagesLoaded;
}

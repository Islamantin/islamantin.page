import { useEffect, useState } from 'react';

export function useFontLoaded() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if document.fonts is available (modern browsers)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback for older browsers - wait a bit for fonts to load
      const timer = setTimeout(() => {
        setFontsLoaded(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return fontsLoaded;
}
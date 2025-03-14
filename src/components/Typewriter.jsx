// src/hooks/useTypewriter.js
import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 50, delay = 10000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1)); // Ensures proper sequencing
        setIndex(index + 1);
      }, speed);

      return () => clearInterval(interval);
    } else {
      // Wait for `delay` time and restart the effect
      const timeout = setTimeout(() => {
        setDisplayedText(""); // Clear text
        setIndex(0); // Reset index
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, delay]);

  return displayedText;
};

export default useTypewriter;

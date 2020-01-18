import { useEffect } from "react";

const BLUE = '#04A0ED';
const RED = '#E60C5B';

export const useBackground = () => {
  useEffect(() => {
    const backgroundColor = Math.random() < 0.5 ? RED : BLUE;
    document.body.style.backgroundColor = backgroundColor;
  }, []);
};

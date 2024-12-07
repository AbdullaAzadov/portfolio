import { useEffect, useState } from "react";

export function useScreenType() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const screenType =
    windowWidth <= 1200
      ? windowWidth <= 768
        ? "mobile"
        : "tablet"
      : "desktop";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return { screenType, screenWidth: windowWidth };
}

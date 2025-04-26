import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down";

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1280) {
        // xl breakpoint
        setVisible(true);
        return;
      }

      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > prevScroll;
      const scrollDifference = Math.abs(currentScroll - prevScroll);

      if (scrollDifference < 10) {
        return;
      }

      if (currentScroll <= 0) {
        setVisible(true);
        return;
      }

      setVisible(!isScrollingDown);
      setPrevScroll(currentScroll);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScroll]);

  return visible;
};

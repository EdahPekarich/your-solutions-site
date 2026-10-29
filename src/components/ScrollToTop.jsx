import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.substring(1));
    let attempts = 0;
    let timer;

    const scrollToSection = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (attempts < 30) {
        attempts++;
        timer = setTimeout(scrollToSection, 100);
      }
    };

    timer = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
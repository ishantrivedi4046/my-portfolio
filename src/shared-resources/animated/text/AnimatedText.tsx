"use client";

import React, { ReactNode, useEffect } from "react";
import "./animatedText.styles.scss";

interface AnimatedTextProps {
  observeElementId: string;
  textNode: ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  observeElementId,
  textNode,
}) => {
  useEffect(() => {
    const $observeSection = document.querySelector(`#${observeElementId}`);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    if ($observeSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            $observeSection?.classList?.add("animated-text");
          } else if (!entry.isIntersecting) {
            $observeSection?.classList?.remove("animated-text");
            $observeSection?.classList?.add("hide");
          }
        });
      }, options);

      observer.observe($observeSection);
    }
  }, []);
  return <>{textNode}</>;
};

export default AnimatedText;

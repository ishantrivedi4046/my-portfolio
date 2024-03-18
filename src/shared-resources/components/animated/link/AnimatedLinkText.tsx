import { uniqueId } from "lodash";
import React from "react";
import "./animatedLinkStyles.scss";

interface AnimatedLinkTextProps {
  title: string;
}
const AnimatedLinkText: React.FC<AnimatedLinkTextProps> = ({ title }) => {
  return (
    <div className="animated-link" data-text={title}>
      {title.split("").map((ch) => (
        <span key={uniqueId()}>{ch}</span>
      ))}
    </div>
  );
};

export default AnimatedLinkText;

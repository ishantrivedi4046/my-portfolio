"use client";

import { useCardTiltHook } from "@/shared-resources/hooks/useCardTiltHook";
import cx from "classnames";
import React, { ReactNode } from "react";
import "./animatedCardStyles.scss";

interface AnimatedCardProps {
  observedElementId: string;
  containerId: string;
  children: ReactNode;
  wrapClassnames?: string;
}
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  observedElementId,
  containerId,
  children,
  wrapClassnames,
}) => {
  useCardTiltHook(observedElementId, containerId);

  return (
    <div className={cx("wrap", wrapClassnames)} id={observedElementId}>
      <div className="container" id={containerId}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;

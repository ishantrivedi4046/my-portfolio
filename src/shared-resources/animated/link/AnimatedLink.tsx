import { NavigationItem } from "@/shared-resources/contracts/globalTypes";
import cx from "classnames";
import { uniqueId } from "lodash";
import Link from "next/link";
import React from "react";
import "./animatedLinkStyles.scss";

interface AnimatedLinkProps extends NavigationItem {
  classNames?: string;
}
const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  title,
  classNames,
}) => {
  return (
    <Link href={href} className={cx(classNames)} key={href}>
      <div className="animated-link" data-text={title}>
        {title.split("").map((ch) => (
          <span key={uniqueId()}>{ch}</span>
        ))}
      </div>
    </Link>
  );
};

export default AnimatedLink;

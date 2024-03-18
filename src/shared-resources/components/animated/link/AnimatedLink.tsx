import { NavigationItem } from "@/shared-resources/contracts/globalTypes";
import cx from "classnames";
import Link from "next/link";
import React from "react";
import AnimatedLinkText from "./AnimatedLinkText";

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
      <AnimatedLinkText title={title} />
    </Link>
  );
};

export default AnimatedLink;

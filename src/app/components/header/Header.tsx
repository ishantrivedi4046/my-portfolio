import cx from "classnames";
import { uniqueId } from "lodash";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "./constant";
import "./headerStyles.scss";

const Header = () => {
  return (
    <div className="w-full h-12 sticky top-0 justify-center flex">
      <div className="sm:w-[60%] w-[75%]  h-full border-b-[1px] border-b-gray-300 flex justify-center">
        <div className="h-full items-center gap-8 font-medium none sm:flex hidden">
          {NAVIGATION_ITEMS.map(({ href, title }) => (
            <Link
              href={href}
              className={cx("animated-link")}
              data-text={title}
              key={href}
            >
              {title.split("").map((ch) => (
                <span key={uniqueId()}>{ch}</span>
              ))}
            </Link>
          ))}
        </div>
        <div className="h-full flex items-center font-medium sm:hidden text-lg">
          Ishan Trivedi
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";
import AnimatedLink from "@/shared-resources/components/animated/link/AnimatedLink";
import { uniqueId } from "lodash";
import { useEffect } from "react";
import About from "../about/About";
import { NAVIGATION_ITEMS } from "./constant";
import "./header.styles.scss";

const Header = () => {
  useEffect(() => {
    const $observeSection = document.querySelector("#benefits");
    const headerElement = document.querySelector("#header");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    if ($observeSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerElement?.classList?.add("dark-header-bg");
          } else if (!entry.isIntersecting) {
            headerElement?.classList?.remove("dark-header-bg");
          }
        });
      }, options);

      observer.observe($observeSection);
    }
  }, []);

  return (
    <div
      className="w-full h-12 sticky top-0 justify-center flex bg-white z-50 bg-opacity-60"
      id="header"
    >
      <div className="sm:w-[60%] w-[75%]  h-full border-b-[1px] border-b-gray-300 flex justify-center">
        <div className="h-full items-center gap-8 font-medium none sm:flex hidden">
          {NAVIGATION_ITEMS.map((props) => (
            <AnimatedLink {...props} key={uniqueId()} />
          ))}
          <About />
        </div>
        <div className="h-full flex items-center font-medium sm:hidden text-lg">
          Ishan Trivedi
        </div>
      </div>
    </div>
  );
};

export default Header;

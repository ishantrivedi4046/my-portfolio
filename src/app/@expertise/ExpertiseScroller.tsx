"use client";

import Image from "next/image";
import { useEffect } from "react";
import { EXPERTISE_ROW_ONE, EXPERTISE_ROW_TWO } from "./constant";

const ExpertiseScroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner?.children ?? []);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem: any = item.cloneNode(true);
        duplicatedItem?.setAttribute?.("aria-hidden", true);
        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }, []);

  return (
    <>
      <div className="w-full inline-flex overflow-hidden scroller">
        <ul className="flex justify-center items-center gap-8 scroller__inner animate-infinite-scroll-left">
          {EXPERTISE_ROW_ONE.map(({ image, alt }) => (
            <li
              key={alt}
              className="flex flex-col items-center gap-4 justify-center sm:w-64 sm:h-64 w-48 h-48 bg-white rounded-xl drop-shadow-md "
            >
              <Image src={image} alt={alt} />
              <div className=" text-xl">{alt}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full inline-flex overflow-hidden scroller">
        <ul className="flex justify-center items-center gap-8 animate-infinite-scroll-right scroller__inner">
          {EXPERTISE_ROW_TWO.map(({ image, alt }) => (
            <li
              key={alt}
              className="flex flex-col items-center gap-4 justify-center sm:w-64 sm:h-64 w-48 h-48 bg-white rounded-xl drop-shadow-md"
            >
              <Image src={image} alt={alt} />
              <div className=" text-xl">{alt}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpertiseScroller;

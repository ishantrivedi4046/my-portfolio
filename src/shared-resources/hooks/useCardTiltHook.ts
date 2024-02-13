import { useEffect, useState } from "react";

/**
 * The `useCardTiltHook` function is a custom React hook that adds tilt effect to a card element based
 * on mouse movement.
 * @param {string} observeElementId - The `observeElementId` parameter is the ID of the element that
 * you want to observe for mouse movement. This element will trigger the card tilt effect when the
 * mouse moves over it.
 * @param {string} containerId - The `containerId` parameter is the ID of the HTML element that
 * represents the container for the card tilt effect.
 */
export const useCardTiltHook = (
  observeElementId: string,
  containerId: string
) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [container, setContainer] = useState<any>();
  const [oberservedElement, setObservedElement] = useState<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  const setProperty = (p: string, v: string | number) => {
    if (container) container.style.setProperty(p, v);
  };

  const defaultStates = () => {
    if (container) container?.classList?.remove?.("container--active");
    setProperty("--rY", 0);
    setProperty("--rX", 0);
    setProperty("--bY", "80%");
    setProperty("--bX", "50%");
  };

  const handleMouseMove = (event: any) => {
    const { offsetX, offsetY } = event;
    const X = -(offsetX - width / 2) / 4 / 5;
    const Y = (offsetY - height / 2) / 4 / 5;

    setProperty("--rY", X.toFixed(2));
    setProperty("--rX", Y.toFixed(2));
    setProperty("--bY", `${80 - parseFloat((X / 4).toFixed(2))}%`);
    setProperty("--bX", `${50 - parseFloat((Y / 4).toFixed(2))}%`);
  };

  const handleMouseEnter = () => {
    setMouseEnter(true);
    if (container) container?.classList?.add?.("container--active");
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
    defaultStates();
  };

  useEffect(() => {
    const $observeSection = document.querySelector(`#${observeElementId}`);
    let $container = null;
    if ($observeSection) {
      $container = $observeSection.querySelector(`#${containerId}`);
      setObservedElement($observeSection);
    }

    if ($container) {
      setWidth($container.clientWidth ?? 0);
      setHeight($container.clientHeight ?? 0);
      setContainer($container);
    }
  }, [containerId, observeElementId]);

  useEffect(() => {
    if (container && oberservedElement) {
      oberservedElement.addEventListener("mousemove", handleMouseMove);
      oberservedElement.addEventListener("mouseenter", handleMouseEnter);
      oberservedElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      oberservedElement?.removeEventListener("mousemove", handleMouseMove);
      oberservedElement?.removeEventListener("mouseenter", handleMouseEnter);
      oberservedElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [container, oberservedElement]);
};

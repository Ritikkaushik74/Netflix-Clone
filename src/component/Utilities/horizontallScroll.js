import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    // console.log(el);
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        // console.log("event", e);
        const deltay = e.deltaY * 5;
        el.scrollTo({
          left: el.scrollLeft + deltay,
          behavior: "smooth"
        });
        // console.log("scroll to", el.scrollTo);
        // console.log("el left", el.scrollLeft);
        // console.log("el left", el.scrollLeft * 1.2);
        // console.log("e right", e.deltaY);
        // console.log("e right", e.deltaY * 8);
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

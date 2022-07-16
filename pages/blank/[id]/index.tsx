import { Blank1 } from "@templates/plain/blank1";
import { Blank2 } from "@templates/plain/blank2";
import { Blank3 } from "@templates/plain/blank3";
import { useRouter } from "next/router";
import React from "react";

const BLANK_DESIGNS: any = {
  "1": <Blank1 />,
  "2": <Blank2 />,
  "3": <Blank3 />,
};
const BlankDesign = () => {
  const allElements = [{}];
  const router: any = useRouter();
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    const height = window.innerHeight;
    window.onmouseover = (e) => {
      console.log(e.target);
    };
    const documentElements: any =
      window.document.body.querySelectorAll("Section");
    const documentElementsArray = [...documentElements];

    //get position of element
    const getPosition = (element: any) => {
      let rect = element.getBoundingClientRect();
      return {
        x: rect.left,
        y: rect.top,
      };
    };

    documentElementsArray.forEach((element, index) => {
      const { x, y } = getPosition(element);
      const elementX = Math.round((12 * x) / width);
      //get width of element
      const elementWidth = Math.round((12 * element.offsetWidth) / width);
      const elementHeight = Math.round((12 * element.offsetHeight) / height);
      console.log(x, y);
      const section = {
        i: index,
        text: element.innerHTML,
        w: elementWidth,
        h: elementHeight,
        x: elementX,
      };
      allElements.push(section);
    });
  }

  console.log(allElements);

  return <div>{BLANK_DESIGNS[router.query.id]}</div>;
};

export default BlankDesign;

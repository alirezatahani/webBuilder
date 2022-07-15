import { Blank1 } from "@templates/plain/blank1";
import { Blank2 } from "@templates/plain/blank2";
import { Blank3 } from "@templates/plain/blank3";
import { useRouter } from "next/router";
import React, { useState } from "react";

const BLANK_DESIGNS: any = {
  "1": <Blank1 />,
  "2": <Blank2 />,
  "3": <Blank3 />,
};

const BlankDesign = () => {
  const router: any = useRouter();
  const allElements = [{}];
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    window.onmouseover = (e) => {
      console.log(e.target);
    };
    const documentElements: any =
      window.document.body.querySelectorAll("Section");
    const documentElementsArray = [...documentElements];

    documentElementsArray.map((element) => {
      //get position of element
      const getPosition = (element: any) => {
        var rect = element.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top,
        };
      };

      const { x, y } = getPosition(element);
      const elementX = Math.round((12 * x) / width);
      //get width of element
      const elementWidth = Math.round((12 * element.offsetWidth) / width);
      console.log(x, y);
      const section = {
        i: element,
        w: elementWidth,
        h: element.offsetHeight,
        x: elementX,
      };
      allElements.push(section);
    });
  }
  console.log(allElements);

  return <div>{BLANK_DESIGNS[router.query.id]}</div>;
};

export default BlankDesign;

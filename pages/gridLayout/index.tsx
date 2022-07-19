import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Blank1 } from "@templates/plain/blank1";
import { Blank2 } from "@templates/plain/blank2";
import { Blank3 } from "@templates/plain/blank3";
import { renderToString } from "react-dom/server";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { theme } from "@global/Global";

const EditTemplate = () => {
  const BLANK_DESIGNS: any = {
    "1": <Blank1 />,
    "2": <Blank2 />,
    "3": <Blank3 />,
  };
  const [allElements, setAllElements] = useState({ data: [{}] });
  const router: any = useRouter();
  const templateId = router.query.template.split("/")[1];
  const component = BLANK_DESIGNS[templateId];
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </StyleSheetManager>
  );
  console.log(html);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const width = window.innerWidth;
  //     const height = window.innerHeight;
  //     // window.onmouseover = (e) => {
  //     //   console.log(e.target);
  //     // };
  //     const documentElements: any =
  //       window.document.body.querySelectorAll("Section");
  //     const documentElementsArray = [...documentElements];

  //     const getPosition = (element: any) => {
  //       var rect = element.getBoundingClientRect();
  //       return {
  //         x: rect.left,
  //         y: rect.top,
  //       };
  //     };
  //     documentElementsArray.map((element, index) => {
  //       //get position of element
  //       const { x, y } = getPosition(element);
  //       const elementX = Math.round((12 * x) / width);
  //       //get width of element
  //       const elementWidth = Math.round((12 * element.offsetWidth) / width);
  //       const elementheight = Math.round((12 * element.offsetHeight) / height);
  //       console.log("from key");
  //       const section = {
  //         i: index,
  //         text: element.innerHTML,
  //         w: elementWidth,
  //         h: elementheight,
  //         x: elementX,
  //         y: 0,
  //       };
  //       setAllElements((preState) => ({
  //         data: [...preState.data, { section }],
  //       }));
  //     });
  //     console.log(allElements);
  //   }
  // }, []);

  return <>this is grid layout page</>;
};

export default EditTemplate;

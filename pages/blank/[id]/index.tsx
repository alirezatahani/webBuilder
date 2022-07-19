import { theme } from "@global/Global";
import { Blank1 } from "@templates/plain/blank1";
import { Blank2 } from "@templates/plain/blank2";
import { Blank3 } from "@templates/plain/blank3";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import styled, {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";

const BLANK_DESIGNS: any = {
  "1": <Blank1 />,
  "2": <Blank2 />,
  "3": <Blank3 />,
};

const BlankDesign = () => {
  const router: any = useRouter();
  const x = router.query.id;
  console.log(router.query);
  const { isEdit } = router.query; // sttring

  const [allElements, setAllElements] = useState({ data: [{}] });
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
  const component = BLANK_DESIGNS[router.query.id];
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags();
  //console.log(html,styleTags);
  if (isEdit === "true") {
    return (
      <div
        style={{
          width: "100%",
          color: "#fff",
          padding: "1rem",
          backgroundColor: "blueviolet",
          textAlign: "center",
        }}
      >
        <Link
          href={{
            pathname: "/gridLayout",
            query: html, // the data
          }}
        >
          <a>Edit Template</a>
        </Link>
      </div>
    );
  } else {
    return <div>{BLANK_DESIGNS[x]}</div>;
  }
};

export default BlankDesign;

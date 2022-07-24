import { useRouter } from "next/router";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import { renderToString } from "react-dom/server";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { theme } from "@global/Global";
import dynamic from "next/dynamic";

const EditTemplate = () => {
  const [allElements, setAllElements] = useState({ data: [{}] });
  const router: any = useRouter();

  useEffect(() => {
    if (router.query.template) {
      const myTemplate = router.query.template
        .split("/")
        .toString()
        .replace(",", "")
        .replace("b", "B");
      const Templates = dynamic(() =>
        import("@templates/index").then((Templates: any) => {
          console.log(Templates);
          return Templates[myTemplate];
        })
      );
      console.log(Templates);
      const sheet = new ServerStyleSheet();
      const html = renderToString(
        <StyleSheetManager sheet={sheet.instance}>
          <ThemeProvider theme={theme}>
            <Templates />
          </ThemeProvider>
        </StyleSheetManager>
      );
      const style = sheet.getStyleTags();
      console.log(html);

      // elemntsArray.map((item, index) => {
      //   //console.log(index,item);
      //   const section = {
      //     i: index,
      //     text: item,
      //     w: 2,
      //     h: 1,
      //     x: 12,
      //     y: 0,
      //   };
      //   //console.log(section);

      //   // setAllElements((preState) => ({
      //   //   data: [...preState.data, { item }],
      //   // }));
      // });
    }
  }, [router]);

  return (
    <>
      this is grid layout page
    </>
  );
};

export default EditTemplate;
//console.log(allElements);
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

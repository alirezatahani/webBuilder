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
//refactor
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

  return <>this is grid layout page</>;
};

export default EditTemplate;

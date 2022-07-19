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
  return <div>{BLANK_DESIGNS[x]}</div>;
};

export default BlankDesign;

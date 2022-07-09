import React from "react";
import { ControlPanel } from "@modules/index";
// import { Home, Create } from '@pages/index';
import { Design37 } from "@templates/designed/37";
import { Blank3 } from "@templates/plain/blank3";
import { Design94 } from "@templates/designed/94";
import { Design24 } from "@templates/designed/24";
import { ComponentsSelector } from "@modules/ComponentsSelector/ComponentsSelector";
import { Blank1 } from "@templates/plain/blank1";
import { Blank2 } from "@templates/plain/blank2";

export const routes = [
	// { path: '/', element: <Home /> },
	{ path: "predesign/94", element: <Design94 /> },
	{ path: "predesign/37", element: <Design37 /> },
	{ path: "predesign/24", element: <Design24 /> },
	{ path: "blank/3", element: <Blank3 /> },
	{ path: "blank/2", element: <Blank2 /> },
	{ path: "blank/1", element: <Blank1 /> },
	// { path: 'create', element: <Create /> },
	{ path: "selector", element: <ComponentsSelector /> },
];

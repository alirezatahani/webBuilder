import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export default function GridLayout() {
  let [layout, setLayout] = useState(initalLayout);
  let [key, setKey] = useState("d");
  useEffect(() => {
    console.log("Layout:", layout);
  }, [layout]);

  const layoutChange = (layout) => {
    console.log(layout);
  };

  const incrementChar = (c) => {
    setKey(String.fromCharCode(c.charCodeAt(0) + 1));
  };

  const dropHandler = (layout, layoutItem) => {
    console.log("Drop Handler called");

    let item = layoutItem;
    item.i = key;
    console.log(JSON.stringify(layoutItem, ["x", "y", "w", "h"], 2));
    setLayout((initial) => [...initial, item]);
    incrementChar(key);
  };

  return <div></div>;
}

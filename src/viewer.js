import React, { useEffect, useRef } from "react";
import { initAPS } from "./main";

const Viewer = () => {
  const viewerDiv = useRef(null);

  useEffect(() => {
    initAPS()
  }, []);

  return (
    <div>
      <div id="preview"></div>
      <div id="overlay"></div>
    </div>
  );
};

export default Viewer;

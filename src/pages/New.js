import React from "react";
import { useEffect } from "react";
import EditorContainer from "../components/template/EditorContainer";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.textContent = `New - Miracle Memory `;
  }, []);
  return <EditorContainer />;
};
export default New;

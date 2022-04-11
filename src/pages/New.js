import React from "react";
import { useEffect } from "react";
import CommonNavigation from "../components/organisms/common/CommonNavigation";
import EditorContainer from "../components/template/EditorContainer";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.textContent = `New - Miracle Memory `;
  }, []);
  return (
    <>
      <EditorContainer />
      {/* <CommonNavigation /> */}
    </>
  );
};
export default New;

import React from "react";
import { jsx } from "@emotion/core";
import BackToTop from "react-back-to-top";

function ToTop() {
  return (
    <BackToTop
      mainStyle={{
        width: "100%",
        height: "100%"
      }}
      percentStyle={{
        width: "100%",
        height: "100%"
      }}
      offsetTop={20}
      step={500}
      percent={true}
      visiblePercent={3}
    ></BackToTop>
  );
}
export default ToTop;
